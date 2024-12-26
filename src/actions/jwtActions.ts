"use server";

import jwt from "jsonwebtoken";
import { z } from "zod";

const verifyTokenSchema = z.object({
  token: z
    .string({
      message: "El token debe ser una cadena de texto",
    })
    .nonempty({
      message: "El token no puede estar vacío",
    }),
});

type VerifyTokenResult = {
  success: boolean;
  message?: string;
  decoded?: unknown;
};

export const verifyToken = (token: string): VerifyTokenResult => {
  const result = verifyTokenSchema.safeParse({ token });

  if (!result.success) {
    return {
      success: false,
      message: "El token no cumple con el formato requerido",
    };
  }

  if (!process.env.JWT_SECRET) {
    throw new Error(
      process.env.NODE_ENV === "production"
        ? "Error interno del servidor"
        : "No se ha definido un secreto para JWT"
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
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
