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
import { LoaderIcon, Mail, Phone } from "lucide-react";
import React from "react";

const Page = async () => {
  // Fetch data properly
  let contactedList = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/enquiries`,
      { cache: "no-store" } // Ensure fresh data on each request
    );

    const jsonData = await response.json();
    if (jsonData.success) {
      contactedList = jsonData.data;
    }
  } catch (error) {
    console.error("Error fetching enquiries:", error);
  }

  return (
    <section className="col-span-12 mt-28 rounded-2xl h-screen relative flex flex-col gap-10 overflow-hidden p-4">
      <h1 className="text-3xl font-bold text-center w-full">
        Our Enquiry List
      </h1>
      <Table className="mx-auto w-3/4">
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
         
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            contactedList.map((contact: any) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.id}</TableCell>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.destination}</TableCell>
                <TableCell>{contact.message}</TableCell>
                <TableCell>
                  {new Date(contact.createdAt).toLocaleDateString()}
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
