"use client"

import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full md:max-w-lg lg:max-w-xl">
      <input
        type="text"
        placeholder="Search for medicines, active ingredients..."
        className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 md:py-2.5 pl-5 pr-12 text-base md:text-sm outline-none transition-all focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10 placeholder:text-gray-400"
      />

      <button className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-teal-600 p-2 md:p-1.5 text-white hover:bg-teal-700 transition-colors flex items-center justify-center shadow-sm">
        <Search sx={{ fontSize: { xs: 20, md: 20 } }} />
      </button>
    </div>
  );
};

export default SearchBar;