"use server";

import { auth } from "@/auth";
import { uploadImage } from "@/lib/cloudinary";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createProjectSchema = z.object({
  title: z
    .string()
    .min(5, { message: "El título debe tener al menos 5 caracteres." })
    .max(50, { message: "El título debe tener como máximo 50 caracteres." }),
  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracters." })
    .max(500, {
      message: "La descripción debe tener como máximo 500 caracteres.",
    }),
  url: z.string().url({ message: "La URL no es válida" }),
  github: z.string().url({ message: "La URL no es válida" }),
});

interface CreateProjectFormState {
  errors: {
    title?: string[];
    description?: string[];
    url?: string[];
    github?: string[];
    image?: string[];
    _form?: string[];
  };
}

export async function createProjectAction(
  formState: CreateProjectFormState,
  formData: FormData
): Promise<CreateProjectFormState> {
  const result = createProjectSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    url: formData.get("websiteUrl"),
    github: formData.get("githubUrl"),
  });

  console.log(result);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const image = formData.get("image") as File;

  if (!image || image.size === 0) {
    return { errors: { image: ["La imagen es requerida."] } };
  }

  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return {
      errors: {
        _form: ["No se pudo autenticar al usuario."],
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email!,
    },
  });

  if (!user || !user.id) {
    return {
      errors: {
        _form: ["No se encontró al usuario."],
      },
    };
  }

  let imageUrl: string;

  try {
    imageUrl = await uploadImage(image);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          image: [error.message],
        },
      };
    } else {
      return {
        errors: {
          image: ["Ocurrió un error al subir la image"],
        },
      };
    }
  }

  try {
    await prisma.project.create({
      data: {
        title: result.data.title,
        description: result.data.description,
        imageUrl: imageUrl,
        websiteUrl: result.data.url,
        githubUrl: result.data.github,
        userId: user?.id,
      },
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
          _form: ["Ocurrió un error al crear el proyecto."],
        },
      };
    }
  }

  revalidatePath("/projects");
  revalidatePath("/");
  redirect("/projects");
}
