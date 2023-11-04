import { z } from "zod";

export const userSchema = z.object({
    dni: z.number().min(1),
    nombre: z.string().min(3).max(255),
    edad: z.number().min(0).max(110),
    genero: z.enum(['masculino', 'femenino', 'otro']),
    tipoDocumento: z.string().min(1),
    telefPersonal: z.number().min(1),
    email: z.string().min(1),
    ubicacion: z.object({
        pais: z.string().min(1),
        departamento: z.string().min(1),
        municipio: z.string().min(1),
        codigoPostal: z.string().min(1),
        direccion: z.string().min(1),
    })
})

export const envioSchema = z.object({
    id: z.number().min(1),
    descripcion: z.string().min(3).max(255),
    fecha_salida: z.string().min(1),
    estado: z.string().min(3).max(255),
    paquete: z.object({
        idPaquete: z.number().min(1),
        peso: z.number().min(1),
        productos: z.array(z.object({
            idProducto: z.number().min(1),
            nombre: z.string().min(3).max(255),
        }))
    })
})