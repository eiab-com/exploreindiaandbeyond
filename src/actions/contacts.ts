import { db } from "@/lib/prisma";
import { ContactFormValues, contactFormSchema } from "@/schema";

// In your submitContactForm function
export async function submitContactForm(data: ContactFormValues) {
  // Validate data with Zod
  const parsedData = contactFormSchema.safeParse(data);

  if (!parsedData.success) {
    return { error: "Invalid form data." };
  }

  const { name, email, message, location, phone, countryCode, contactMethod } =
    parsedData.data;

  try {
    // Check if a contact with this email already exists
    const existingContact = await db.contact.findFirst({
      where: { email },
    });

    if (existingContact) {
      return { error: "A contact with this email already exists." };
    }

    // Create new contact if no existing one found
    await db.contact.create({
      data: {
        name,
        email,
        message,
        location,
        phone: `${countryCode}${phone}`,
        countryCode,
        contactMethod,
      },
    });

    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Submission error:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}
