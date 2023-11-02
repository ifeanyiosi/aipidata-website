import * as z from "zod";

export const ContactValidation = z.object({
  name: z.string().trim(),
  company: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }).trim(),
  phone: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(2, { message: "minimum of 2 characters" })
    .max(1000, { message: "maximum of 1000 characters" }),
});
