"use client"

import { z } from "zod"

export const schemaLogin = z.object({
  email: z.string().email({ message: "Ingrese un email valido" }).min(5, { message: "El email debe tener al menos 5 caracteres" }),
  password: z.string().min(1, { message: "La contraseña es obligatoria" }),
})


