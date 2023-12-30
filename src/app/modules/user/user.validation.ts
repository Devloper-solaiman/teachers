import { z } from "zod";


const userValidatioSchema = z.object({
    password: z
        .string({
            invalid_type_error: 'password must be a string'
        })
        .max(20,
            { message: 'password can not be more then 20 carectors' }).optional(),
});

export const UserValidation = {
    userValidatioSchema,
}