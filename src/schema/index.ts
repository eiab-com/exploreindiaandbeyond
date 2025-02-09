import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
  destination: z.string(),
  phone: z.string().optional(),
  countryCode: z.string().optional(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;