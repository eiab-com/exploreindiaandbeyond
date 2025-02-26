import { db } from "./prisma";

export const getAdventureEnquiries = async () => {
  const data = await db.adventureEnquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};

export const getContacts = async () => {
  const data = await db.contact.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};
