import Link from "next/link";
import { Phone, HelpOutline, Language } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div className="hidden md:block w-full bg-teal-900 text-white py-1.5 text-[11px] font-medium tracking-wide">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
            <Phone sx={{ fontSize: 14 }} />
            <span>
              Hotline: <span className="font-bold">1900 1234</span> (Free)
            </span>
          </div>

          <span className="text-teal-700">|</span>

          <Link
            href="/store-locator"
            className="opacity-90 hover:opacity-100 hover:text-teal-200 transition-colors"
          >
            Find a Pharmacy
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/help"
            className="flex items-center gap-1.5 opacity-90 hover:opacity-100 hover:text-teal-200 transition-colors"
          >
            <HelpOutline sx={{ fontSize: 14 }} />
            <span>Support Center</span>
          </Link>

          <span className="text-teal-700">|</span>

          <button className="flex items-center gap-1.5 opacity-90 hover:opacity-100 hover:text-teal-200 transition-colors">
            <Language sx={{ fontSize: 14 }} />
            <span>Tiếng Việt</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
