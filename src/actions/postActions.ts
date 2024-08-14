"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/auth";
import { uploadImage } from "@/lib/cloudinary";

const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

const createPostSchema = z.object({
  title: z
    .string()
    .min(5, { message: "El título debe tener al menos 5 caracteres." })
    .max(50, {
      message: "El título debe tener como máximo 50 caracteres.",
    }),
  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres." })
    .max(1500, {
      message: "La descripción debe tener como máximo 1500 caracteres",
    }),
});

interface CreatePostFormState {
  errors: {
    title?: string[];
    description?: string[];
    category?: string[];
    image?: string[];
    _form?: string[];
  };
}

export async function createPostAction(
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as File;
  const category = formData.get("category") as string;

  // Validate the input data
  const result = createPostSchema.safeParse({
    title,
    description,
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Validate the image
  if (!image || image.size === 0) {
    return {
      errors: {
        image: ["La imagen es requerida."],
      },
    };
  }

  if (!allowedImageTypes.includes(image.type)) {
    return {
      errors: {
        image: ["El formato de la imagen no es válido."],
      },
    };
  }

  // Validate the category
  const isCategoryValid = await prisma.postCategory.findUnique({
    where: {
      name: category,
    },
  });

  if (!isCategoryValid) {
    return {
      errors: {
        category: ["La categoría no es válida."],
      },
    };
  }

  // Validate user session
  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["No se ha podido autenticar el usuario"],
      },
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email!,
    },
  });

  if (!user) {
    return {
      errors: {
        _form: ["No se ha podido encontrar el usuario"],
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
    }
    return {
      errors: {
        image: ["Ha ocurrido un error al subir la imagen"],
      },
    };
  }

  try {
    await prisma.post.create({
      data: {
        title: result.data.title,
        content: result.data.description,
        imageUrl: imageUrl,
        userId: user.id!,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }
  }

  revalidatePath("/blog");
  redirect("/blog");
}
