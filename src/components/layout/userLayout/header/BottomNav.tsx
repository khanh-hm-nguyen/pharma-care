import { Menu, FlashOn } from "@mui/icons-material";
import Link from "next/link";
import { ICategory } from "@/models";
import { getAllCategories } from "@/actions/category.action";

const BottomNav = async () => {
  const categories: ICategory[] = await getAllCategories();

  return (
    <div className="hidden md:block border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center gap-8 overflow-x-auto py-3 text-sm font-medium text-gray-600 no-scrollbar">
          <button className="flex items-center gap-2 text-teal-700 hover:text-teal-800 transition-colors">
            <Menu sx={{ fontSize: 20 }} />
            <span>All Categories</span>
          </button>

          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/categories/${category.slug}`}
              className="whitespace-nowrap hover:text-teal-600 transition-colors"
            >
              {category.name}
            </Link>
          ))}

          <div className="flex-1"></div>

          <Link
            href="/deals"
            className="hidden lg:flex items-center gap-1 text-red-600 hover:underline font-semibold whitespace-nowrap"
          >
            <FlashOn sx={{ fontSize: 18 }} />
            <span>Flash Deals</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default BottomNav;
