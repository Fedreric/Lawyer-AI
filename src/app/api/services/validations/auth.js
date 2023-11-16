import { z } from "zod";

export function authValidation({ email, password }) {
  const schema = z.object({
    email: z
      .string()
      .email("Invalid email")
      .regex(/^.+@.+\..+$/, "Email must have '@' and '.com' or similar"),
    password: z.string().min(7, "The password must be at least 7 characters")
  });
  return schema.safeParse({ email, password });
}
