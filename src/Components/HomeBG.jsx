import HomeBg from "../images/HomeBG.webp";

const HomeBG = () => {
  return (
    <>
      <div className="relative w-full h-auto">
        <img src={HomeBg} className="w-full h-auto object-cover filter brightness-75" alt="Background" />
        
        <div className="absolute z-20 top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col gap-10 items-center justify-center mobile:hidden tablet:hidden">
          <h1 className="text-white text-6xl font-bold montserrat w-4/5 text-center">
            Reimagine Urban Green Spaces for a Sustainable Future
          </h1>
          <p className="text-white text-lg font-medium montserrat text-center">
            EcoVision helps cities optimize green spaces for sustainability and well-being using AI and data-driven insights.
          </p>
          <div className="flex gap-10">
            <button className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg">
              Get Started
            </button>
            <button className="font-bold text-[#434a52] bg-[#FFC107] hover:bg-[#E0A800] hover:text-white outline-none py-2 px-4 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBG;