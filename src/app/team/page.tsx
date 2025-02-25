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
  // ... (keep your team members array same)
];

const Page = () => {
  return (
    <section
      id="teams-section"
      className="col-span-12 min-h-screen py-12 px-4 sm:px-8 lg:px-16 relative"
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-primary font-heading">
        Meet Our Team
      </h2>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 flex-1"
          >
            {/* Team Member Image */}
            <CardHeader className="p-0 border-b border-border">
              <div className="relative aspect-[4/3] w-full">
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
            <CardContent className="p-4 md:p-6 text-center space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-primary">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground italic">
                {member.role}
              </p>
            </CardContent>

            {/* Social Links */}
            <CardFooter className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 p-2 md:p-4">
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              >
                <a href={`mailto:${member.email}`}>
                  <Mail className="w-4 h-4" />
                  <span className="sr-only sm:not-sr-only">Email</span>
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              >
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="sr-only sm:not-sr-only">Instagram</span>
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
