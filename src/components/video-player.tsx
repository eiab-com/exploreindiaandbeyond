import React from "react";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  className?: string;
  onLoad?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  onLoad,
  className = "",
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <video
        src={src}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        onLoad={onLoad}
      />
    </div>
  );
};

export default VideoPlayer;
