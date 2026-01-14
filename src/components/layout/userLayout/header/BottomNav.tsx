import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { ICategory } from "@/models";
import { getAllCategories } from "@/actions/category.action";

// We import 'small' typography, but we manually handle layout here 
// to avoid the large vertical padding of the default 'container'
import { small } from "@/utils/styles/typography";

const BottomNav = async () => {
  const categories: ICategory[] = await getAllCategories();

  return (
    <div className="border-t border-gray-200 bg-gray-50/80 backdrop-blur-sm sticky top-[70px] z-40">
      {/* 1. REPLACED 'container' with manual classes.
           - We keep 'mx-auto max-w-7xl px-4' for horizontal alignment.
           - We REMOVED 'py-6' to fix the "too big padding" issue.
      */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center py-3">
          
          {/* MOBILE: Menu Button (Left Aligned) */}
          <button className="md:hidden group flex items-center gap-2 rounded-md py-1 px-2 -ml-2 text-teal-700 hover:bg-teal-50 transition-all">
            <Menu sx={{ fontSize: 20 }} className="group-hover:text-teal-600" />
            <span className="text-sm font-semibold">All Categories</span>
          </button>

          {/* DESKTOP: Category List (Centered)
              - Added 'justify-center' to put items in the middle.
              - Reduced 'gap-8' to 'gap-6' for a tighter look if needed.
           */}
          <div className="hidden md:flex w-full justify-center items-center gap-6 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/products/category/${category.slug}`}
                className={`
                  ${small} 
                  font-medium whitespace-nowrap transition-colors 
                  hover:text-teal-600 
                  focus:outline-none focus:text-teal-700
                `}
              >
                {category.name}
              </Link>
            ))}
          </div>

        </nav>
      </div>
    </div>
  );
};

export default BottomNav;