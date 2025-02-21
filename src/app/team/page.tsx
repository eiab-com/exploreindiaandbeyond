const Page = () => {
  return (
    <div className="col-span-12 flex items-center justify-start  py-12 bg-background">
      <video autoPlay loop muted playsInline  className="w-1/2 h-96">
        <source
            className="h-96"
          src="https://videos.pexels.com/video-files/30743528/13150998_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>
      <video autoPlay loop muted playsInline className="w-1/2 h-96" >
        <source
          src="https://videos.pexels.com/video-files/30743529/13150986_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Page;
