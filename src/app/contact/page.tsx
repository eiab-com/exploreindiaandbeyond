import VideoPlayer from "@/components/video-player";

const page = () => {
  return (
    <section
      id="home-section"
      className="col-span-12 rounded-2xl lg:h-[calc(100vh-2rem)] h-[50vh] relative overflow-hidden"
    >
      <VideoPlayer src="https://videos.pexels.com/video-files/5379990/5379990-uhd_2560_1440_24fps.mp4" />
    </section>
  );
};

export default page;
