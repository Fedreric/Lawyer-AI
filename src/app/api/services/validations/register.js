import { z } from "zod";

export function registerValidation({name, email, password}){
    const schema = z.object({
        name: z.string().min(2,'The name must be at least 2 characters'),
        email: z.string().email('Invalid email'),
        password: z.string().min(6, 'The password must be at least 6 characters'),
      })


    return schema.safeParse({name, email, password});

}