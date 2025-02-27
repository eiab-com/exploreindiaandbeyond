import { db } from "./prisma";
import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";
export const getAdventureEnquiries = async () => {
  revalidateTag("adventureEnquiries"); // Ensure new data is fetched
  const data = await db.adventureEnquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};

export const getContacts = async () => {
  revalidateTag("contacts");
  const data = await db.contact.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};
