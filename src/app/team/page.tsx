"use client";

import Image from "next/image";
import { Mail, Instagram, Youtube, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  email: string;
  instagram: string;
  about: string;
  youtube?: string;
  fullDescription: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Vinayak Hulihalli",
    role: "Co-founder",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//WhatsApp%20Image%202025-02-24%20at%204.04.50%20AM.jpeg",
    email: "vinayakhulihalli07@gmail.com",
    instagram: "https://www.instagram.com/_dronographer_",
    youtube: "https://www.youtube.com/@Dronographer",
    about:
      "Passionate traveler, motorbiking enthusiast, and professional photographer...",
    fullDescription:
      "I’m a passionate traveler, motorbiking enthusiast, and professional photographer who has explored over 15 Indian states, covering 60,000 km since 2019. As an audiologist by profession and co-founder of Explore India and Beyond, I capture and share the beauty of travel through photography and storytelling, inspiring others to embrace new adventures.",
  },
  {
    id: "2",
    name: "Samarth Thite",
    role: "Co-founder",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//Team%20photo.jpg",
    email: "Samarththite12@gmail.com",
    instagram: "https://www.instagram.com/a_travellester/",
    about:
      "With a passion for travel and adventure, I’ve explored 26 Indian states...",
    fullDescription:
      "With a passion for travel and adventure, I’ve explored 26 Indian states, covering 70,000 km on my motorbike since 2017. From Business Travel Consultant to Guest Relations Manager, I blend hospitality with exploration. As co-founder of ExploreIndiaandBeyond, I share my journey to inspire others to discover India’s beauty.",
  },
  {
    id: "3",
    name: "Praveen",
    role: "Adventure Guide",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//praveen.jpeg",
    email: "alex.johnson@example.com",
    instagram: "https://www.instagram.com/alex_adventures",
    about: "Experienced mountain guide and outdoor survival expert...",
    fullDescription: `
       Praveen is a professional biker with over 5 years of experience as a tour captain. He has clocked more than 120,000 kilometres on his motorbike and a well-known photographer.
▪ His extensive knowledge of motorbikes, repair techniques, and local routes ensures a smooth and enjoyable journey.
▪ With strong connections across the region, Praveen is well-prepared to handle any challenges that may arise during the trip. (Summarise mad)
      `,
  },
  {
    id: "4",
    name: "Palli",
    role: "Adventure Guide",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//palli.jpeg",
    email: "maria.gonzalez@example.com",
    instagram: "https://www.instagram.com/maria_travels",
    about: "Dedicated to creating seamless travel experiences...",
    fullDescription: `
      Pali is a professional biker with over 9 years of experience as a tour captain with nearly 50 tours in the region. He has clocked more than 200,000 kilometres on his motorbike
He’s also WAFA AND WR certified medical assistant
▪ His extensive knowledge of motorbikes, repair techniques, and local routes ensures a smooth and enjoyable journey.
▪ With strong connections across the region, Pali is well-prepared to handle any challenges that may arise during the trip.`,
  },
];

const Page = () => {
  return (
    <section
      id="teams-section"
      className="min-h-screen mt-20 py-12 px-4 sm:px-8 lg:px-16 relative mx-auto col-span-12 max-w-7xl"
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary font-heading bg-clip-text bg-gradient-to-r from-primary to-amber-600">
        Meet Our Team
      </h2>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            className="relative h-full lg:aspect-square flex flex-col items-center gap-4 p-6 hover:shadow-xl transition-all duration-300 group border-2 border-primary/10 hover:border-primary/20 bg-gradient-to-b from-background/50 to-background/100"
          >
            {/* Image Container with Adventure Badge */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-primary font-medium">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full space-y-4">
              {/* About Section */}
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {member.about}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                >
                  <a href={`mailto:${member.email}`}>
                    <Mail className="w-4 h-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                >
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </Button>
                {member.youtube && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <a
                      href={member.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-4 h-4" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </Button>
                )}
              </div>

              {/* Full Bio Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="w-full mt-2 bg-primary/10 hover:bg-primary/20 text-primary"
                  >
                    Full Bio
                    <MoreHorizontal className="w-4 h-4 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl rounded-2xl h-fit">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold">
                      {member.name}
                    </DialogTitle>
                    <p className="text-lg text-primary">{member.role}</p>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="prose prose-sm dark:prose-invert">
                      {member.fullDescription.split("\n").map((line, index) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Page;
