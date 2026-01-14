import { Logo, SearchBar, HeaderActions, BottomNav, TopBar } from "."; // Added TopBar here
import { FileUpload } from "@mui/icons-material";

const ShopHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm flex flex-col">
      {/* <TopBar /> */}

      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between gap-4 md:gap-8">
            <Logo />

            {/* desktop search */}
            <div className="hidden lg:block flex-1 max-w-xl">
              <SearchBar />
            </div>

            {/* <div className="hidden xl:block">
              <button className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100 border border-blue-200">
                <FileUpload sx={{ fontSize: 20 }} />
                <span>Upload Prescription</span>
              </button>
            </div> */}

            <HeaderActions />
          </div>
          {/* mobile search */}

          <div className="pb-4 lg:hidden">
            <SearchBar />
          </div>
        </div>
      </div>

      <BottomNav />
    </header>
  );
};

export default ShopHeader;
