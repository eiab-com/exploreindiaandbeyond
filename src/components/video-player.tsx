import React from "react";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;
