import { z } from "zod";

export const clienteSchema = z.object({
  primer_nombre: z
    .string()
    .min(1, { message: "El primer nombre es obligatorio" })
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/, { message: "Solo se permiten letras" }),
  segundo_nombre: z
    .string()
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]*$/, { message: "Solo se permiten letras" })
    .optional(),
  primer_apellido: z
    .string()
    .min(1, { message: "El primer apellido es obligatorio" })
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/, { message: "Solo se permiten letras" }),
  segundo_apellido: z
    .string()
    .regex(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]*$/, { message: "Solo se permiten letras" })
    .optional(),
  email: z
    .string()
    .email({ message: "Debe ser un correo válido" }),
  telefono: z
    .string()
    .regex(/^\d+$/, { message: "El teléfono solo debe contener números" })
    .min(8, { message: "Debe tener al menos 8 dígitos" }),
  direccion: z
    .string()
    .min(5, { message: "La dirección es obligatoria" }),
});


export type ClienteType = {
  primer_nombre: string;
  segundo_nombre?: string;
  primer_apellido: string;
  segundo_apellido?: string;
  email: string;
  telefono: string;
  direccion: string;
};
