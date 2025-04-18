import hero_image from "../../../assets/hero_image.png";

const HeroSection = () => {
  return (
    <div>
      <div className="lg:min-h-screen block">
        <div className="mt-10">
          <div className="hero">
            <div className="hero-content text-center">
              <div className="max-w-5xl">
                <h1 className="md:text-7xl text-3xl font-bold">
                  Transforming Ideas Into Powerful Software Solutions
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={hero_image} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
