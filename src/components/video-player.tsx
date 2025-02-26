import React, { useState, useEffect, useRef } from "react";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  sources: string[];
  className?: string;
  onLoad?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  sources,
  onLoad,
  className = "",
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video ended event to play the next video
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % sources.length);
  };

  // Effect to set up the event listener when the video element is available
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded);

      // Clean up the event listener when component unmounts
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnded);
      };
    }
  }, []);

  // Effect to load the new video when currentVideoIndex changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.error("Error playing video:", err);
      });
    }
  }, [currentVideoIndex, sources]);

  return (
    <div className={`w-full h-full ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        onLoad={onLoad}
      >
        <source src={sources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
