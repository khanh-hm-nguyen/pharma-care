import { ArrowForward } from "@mui/icons-material";
import { SIDE_BANNERS } from "@/data";

const SideBanners = () => {
  return (
    <div className="flex lg:flex-col gap-4 h-full">
      {SIDE_BANNERS.map((banner) => (
        <div
          key={banner.id}
          className={`group relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl ${banner.bgColor} p-6 md:p-8`}
        >
          <div className="relative z-10">
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {banner.title}
            </h3>
            <p className="mb-4 text-sm text-gray-600">{banner.subtitle}</p>
            <button className="flex items-center gap-1 text-sm font-bold text-teal-700 hover:gap-2 transition-all">
              {banner.ctaText} <ArrowForward sx={{ fontSize: 16 }} />
            </button>
          </div>

          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/30 transition-transform group-hover:scale-110" />
        </div>
      ))}
    </div>
  );
};

export default SideBanners;
