"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  email: string;
  instagram: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Vinayak Hulihalli",
    role: "Co-Founder",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//WhatsApp%20Image%202025-02-24%20at%204.04.50%20AM.jpeg",
    email: "vinayakhulihalli07@gmail.com",
    instagram: "https://www.instagram.com/_dronographer_/",
  },
  {
    id: "2",
    name: "Samarth Thite",
    role: "Co-Founder",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//Team%20photo.jpg",
    email: "Samarththite12@gmail.com",
    instagram: "https://www.instagram.com/a_travellester/",
  },
];

const Page = () => {
  return (
    <section
      id="teams-section"
      className="col-span-12 mt-20 rounded-2xl lg:h-[calc(100vh-2rem)] h-[50vh] relative overflow-hidden p-8 "
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary font-heading">
        Meet Our Team
      </h2>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30"
          >
            {/* Team Member Image */}
            <CardHeader className="p-0 border-b border-border">
              <div className="relative aspect-square w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </CardHeader>

            {/* Team Member Details */}
            <CardContent className="p-6 text-center space-y-2">
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-muted-foreground italic">{member.role}</p>
            </CardContent>

            {/* Social Links */}
            <CardFooter className="flex justify-center gap-4 p-4">
              <Button
                asChild
                variant="secondary"
                size="default"
                className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <a href={`mailto:${member.email}`}>
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="default"
                className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Page;
