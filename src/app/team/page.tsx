"use client";

import Image from "next/image";
import { Mail, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  email: string;
  instagram: string;
  about: string;
  youtube?: string;
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
      "With a passion for travel and adventure, I’ve explored 26 Indian states, covering 70,000 km on my motorbike since 2017. From Business Travel Consultant to Guest Relations Manager, I blend hospitality with exploration. As co-founder of ExploreIndiaandBeyond, I share my journey to inspire others to discover India’s beauty.",
  },
];

const Page = () => {
  return (
    <section
      id="teams-section"
      className="col-span-12 min-h-screen mt-20 py-12 px-4 sm:px-8 lg:px-16 relative max-w-6xl mx-auto"
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary font-heading">
        Meet Our Team
      </h2>

      {/* Team Members Grid */}
      <div className="flex flex-col gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col md:flex-row items-center gap-8 p-6 border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Team Member Image */}
            <div className="relative w-full md:w-1/3 aspect-square md:aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Team Member Details */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-primary">
                {member.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground italic">
                {member.role}
              </p>
              <p className="text-sm md:text-base">{member.about}</p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
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
                  className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
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
                {member.youtube && (
                  <Button
                    asChild
                    variant="secondary"
                    size="sm"
                    className="gap-2 transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={member.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube className="w-4 h-4" />
                      <span className="sr-only sm:not-sr-only">Youtube</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
