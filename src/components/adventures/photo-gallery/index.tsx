"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoViewerProps {
  images: string[];
  title: string;
}

export default function PhotoViewer({ images, title }: PhotoViewerProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <section className="space-y-6">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`${title} gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl p-0 bg-transparent border-none">
              {/* Carousel Navigation */}
              <div className="relative aspect-video w-full h-full">
                <Image
                  src={images[selectedImageIndex || 0]}
                  alt={`${title} gallery image ${selectedImageIndex || 0 + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
                />
                {/* Previous Button */}
                {selectedImageIndex !== null && selectedImageIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 rounded-full hover:bg-background/80"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                )}
                {/* Next Button */}
                {selectedImageIndex !== null &&
                  selectedImageIndex < images.length - 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 rounded-full hover:bg-background/80"
                      onClick={handleNext}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
