import { z } from "zod"

export const schemaRegister = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  lastName: z.string().min(1, { message: "El apellido es obligatorio" }),
  email: z.string().email({ message: "Ingrese un email valido" }).min(5, { message: "El email debe tener al menos 5 caracteres" }),
  password: z.string().min(1, { message: "La contraseña es obligatoria" }),
  repitPassword: z.string().min(1, { message: "Repetí la contraseña" }),
  country:  z.string().min(1, { message: "El pais es obligatorio" }),
  province:  z.string().optional(),
  telephone:z.number().optional()
})


