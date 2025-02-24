import { getAdventureEnquiries } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LoaderIcon, Mail, Phone } from "lucide-react"; // Importing icons
import React from "react";

// Define Contact Type
type Contact = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  destination: string;
  message: string;
};

const Page = async () => {
  const contactedList: Contact[] = await getAdventureEnquiries(); // Fetch data properly

  return (
    <section className="col-span-12 mt-28 rounded-2xl h-screen relative flex flex-col gap-10   overflow-hidden p-4">
      <h1 className="text-3xl font-bold text-center w-full">
        Our Enquiry List
      </h1>
      <Table className=" mx-auto w-3/4">
        <TableCaption>List of users who contacted you.</TableCaption>
        <TableHeader className="bg-card border">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contactedList.length > 0 ? (
            contactedList.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.id}</TableCell>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.destination}</TableCell>
                <TableCell>{contact.message}</TableCell>
                <TableCell>
                  {new Date(contact.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    className="bg-primary/30"
                    size="icon"
                    variant="outline"
                    asChild
                  >
                    <a href={`mailto:${contact.email}`}>
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    className="bg-primary/30 rounded-full"
                    size="icon"
                    variant="outline"
                    asChild
                  >
                    <a href={`tel:${contact.phone}`}>
                      <Phone className="h-5 w-5" />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                <LoaderIcon className="animate-spin h-5 w-5" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={8} className="text-right font-medium">
              Total Contacts: {contactedList.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
};

export default Page;
