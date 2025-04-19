"use client";
import { stories } from "@/mock-data/content";
import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const Page = () => {
  const [openStoryId, setOpenStoryId] = useState<number | null>(null);

  const openStoryDialog = (id: number) => {
    setOpenStoryId(id);
  };

  const closeStoryDialog = () => {
    setOpenStoryId(null);
  };

  return (
    <div className="container mt-20 h-fit  mx-auto px-4 py-16 max-w-3xl col-span-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        Customer Stories
      </h1>
      <div className="grid gap-8 z-50">
        {stories.map((story) => (
          <React.Fragment key={story.id}>
            <Card className="overflow-hidden border border-border bg-card shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <Image
                    src={story.imageSrc}
                    alt={`${story.name}'s adventure`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between p-6">
                  <CardHeader className="p-0 pb-4">
                    <div>
                      <h2 className="text-2xl font-semibold text-primary">
                        {story.name}
                      </h2>
                      <p className="text-muted-foreground">{story.location}</p>
                      <div className="flex mt-2">
                        {Array.from({ length: story.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-foreground leading-relaxed">
                      {story.text.length > 200
                        ? `${story.text.substring(0, 200).trim()}...`
                        : story.text}
                    </p>
                  </CardContent>
                  <CardFooter className="p-0 pt-4">
                    <button
                      className="text-primary hover:text-primary/80 font-medium"
                      onClick={() => openStoryDialog(story.id)}
                    >
                      Read full story
                    </button>
                  </CardFooter>
                </div>
              </div>
            </Card>

            <Dialog
              open={openStoryId === story.id}
              onOpenChange={closeStoryDialog}
            >
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold text-primary flex items-center gap-2">
                    {` ${story.name}'s Experience`}
                    <span className="text-muted-foreground text-base font-normal">
                      {story.location}
                    </span>
                  </DialogTitle>
                  <div className="flex mt-1">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </DialogHeader>
                <div className="relative h-64 w-full overflow-hidden rounded-md mb-4">
                  <Image
                    src={story.imageSrc}
                    alt={`${story.name}'s adventure`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <DialogDescription className="text-foreground leading-relaxed whitespace-pre-line">
                  {story.text}
                </DialogDescription>
                <DialogClose className="absolute right-4 top-4" />
              </DialogContent>
            </Dialog>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Page;
