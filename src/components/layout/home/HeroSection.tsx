import { BannerSlider, SideBanners, ServiceHighlights } from ".";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <div className="lg:col-span-2">
          <BannerSlider />
        </div>
        <div className="lg:block lg:col-span-1 lg:h-[400px]">
          <SideBanners />
        </div>
      </div>

      {/* Bottom Section: Highlights */}
      {/* <ServiceHighlights /> */}
    </div>
  );
};

export default HeroSection;
