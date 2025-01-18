import AdventureCard from "@/components/adventures/adventure-card/adventure-card";
import { bikingAdventuresData } from "@/data/content";
import dayjs from "dayjs";
import React from "react";

const page = () => {
  return (
    <div className="col-span-12 flex flex-col items-start justify-start space-y-4 mx-6  ">
      {/* <div className="cover-image w-full h-[600px] border mb-2  rounded-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519092437326-bfd121eb53ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={2070}
          height={460}
          unoptimized
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div> */}

      <div className="flex gap-4 justify-center items-center h-auto w-full flex-wrap">
        {bikingAdventuresData.map((adventure, index) => (
          <AdventureCard
            key={index}
            title={adventure.title}
            coverImage={adventure.imageSrc}
            altText={adventure.altText}
            startDate={dayjs(adventure.startDate)}
            id={adventure.id}
            shortDescription={adventure.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
