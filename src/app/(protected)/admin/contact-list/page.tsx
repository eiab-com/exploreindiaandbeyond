export const dynamic = "force-dynamic";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = async () => {
  let contactedList = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/contacts`
    );
    const jsonData = await response.json();
    if (jsonData.success) {
      contactedList = jsonData.data;
    }
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
  return (
    <section className="col-span-12 mt-28 rounded-2xl h-screen relative flex flex-col gap-10   overflow-hidden p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Contact List</h1>
        <p className="text-muted-foreground">
          List of users who contacted you.
        </p>
      </div>

      <Table className=" mx-auto w-3/4">
        <TableHeader className="bg-card border">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Contact Method</TableHead>
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
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.location}</TableCell>
                <TableCell>{contact.contactMethod}</TableCell>
                <TableCell>{contact.message}</TableCell>
                <TableCell>
                  {new Date(contact.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} className="text-center">
                No contacts found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9}>
              Total Contacts: {contactedList.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
};

export default Page;
