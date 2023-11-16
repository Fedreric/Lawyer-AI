import { z } from "zod";

export function registerValidation({ name, email, password }) {
  const schema = z.object({
    name: z.string().min(2, "The name must be at least 2 characters"),
    email: z
      .string()
      .email("Invalid email")
      .regex(/^.+@.+\..+$/, "Email must have '@' and '.com' or similar"),
    password: z.string().min(7, "The password must be at least 7 characters")
  });
  return schema.safeParse({ name, email, password });
}
