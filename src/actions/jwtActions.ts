"use server";

import jwt from "jsonwebtoken";
import { z } from "zod";
import { getSignedUrlForFile } from "@/utils/aws";

const verifyTokenSchema = z.object({
  token: z
    .string({
      message: "El token debe ser una cadena de texto",
    })
    .nonempty({
      message: "El token no puede estar vacío",
    }),
});

export const verifyToken = async (token: string) => {
  const result = verifyTokenSchema.safeParse({ token });

  if (!result.success) {
    return {
      success: false,
      message: "El token no cumple con el formato requerido",
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return {
      success: true,
      decoded,
    };
  } catch (error) {
    console.error("Error al verificar el token, jwtActions.ts", error);

    return {
      success: false,
      message: "El token no es válido",
    };
  }
};

const requestAWSFileSchema = z.object({
  token: z
    .string({
      message: "El token debe ser una cadena de texto",
    })
    .nonempty({
      message: "Se requiere un token para realizar la petición",
    }),
  key: z
    .string({
      message: "La clave debe ser una cadena de texto",
    })
    .nonempty({
      message: "La clave no puede estar vacía",
    }),
});

export const requestAWSFile = async (token: string, key: string) => {
  const result = requestAWSFileSchema.safeParse({ token, key });

  // check if the token check failed
  if (!result.success) {
    return {
      success: false,
      message:
        result.error.flatten().fieldErrors?.token?.join(", ").toString() ||
        "Error al validar el token",
    };
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string);

    return {
      success: true,
      message: await getSignedUrlForFile(key, 60),
    };
  } catch (error) {
    console.error("Error al verificar el token, jwtActions.ts", error);

    return {
      success: false,
      message: "El token no es válido",
    };
  }
};
