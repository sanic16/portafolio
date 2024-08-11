"use server";

import { z } from "zod";
import { compileContactTemplate, sendMail } from "@/mail/mails";

const contactSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracters",
    })
    .max(100, {
      message: "El nombre debe tener como máximo 100 caracteres",
    }),
  email: z.string().email({
    message: "El email no es válido",
  }),
  message: z
    .string()
    .min(10, {
      message: "El mensaje debe tener al menos 10 caracteres",
    })
    .max(500, {
      message: "El mensaje debe tener como máximo 500 caracteres",
    }),
});

interface ContactFormState {
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
    _form?: string[];
  };
  success?: boolean;
}

export async function contactFormAction(
  {
    captcha,
  }: {
    captcha: string | null;
  },
  formState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Paso 1: Validar los datos del formulario
  const result = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Paso 2: Verificar el captcha
  if (captcha === null) {
    return {
      errors: {
        _form: ["Por favor, verifica que no eres un robot"],
      },
    };
  }

  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    {
      method: "POST",
    }
  );

  const captchaResult = await captchaResponse.json();

  if (!captchaResult.success) {
    return {
      errors: {
        _form: ["Error al verificar el captcha"],
      },
    };
  }

  //   Paso 3: Enviar el correo
  const { name, email, message } = result.data;
  const htmlBody = compileContactTemplate(name, email, message);
  try {
    await sendMail({
      to: process.env.DEFAULT_MAIL_RECEIVER || "",
      subject: "Nuevo mensaje de contacto",
      body: htmlBody,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Error al enviar el correo"],
        },
      };
    }
  }

  return {
    success: true,
    errors: {},
  };
}
