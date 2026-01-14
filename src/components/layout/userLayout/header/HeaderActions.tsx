"use client";

import {
  LocationOnOutlined,
  LocalHospitalOutlined,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Link from "next/link";

import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";

const HeaderActions = () => {
  // 1. Get auth state from Redux
  const { user } = useAppSelector((state) => state.auth);
  const cartItems = useAppSelector((state) => state.cart);

  console.log(user);

  return (
    <div className="flex items-center gap-3 md:gap-6">
      {/* <Link
        href="/doctors"
        className="hidden md:flex flex-col items-center gap-1 text-gray-500 hover:text-teal-600 transition-colors"
      >
        <LocalHospitalOutlined sx={{ fontSize: 24 }} />
        <span className="text-[10px] font-medium uppercase">Find Doctor</span>
      </Link>

      <Link
        href="/locations"
        className="hidden md:flex flex-col items-center gap-1 text-gray-500 hover:text-teal-600 transition-colors"
      >
        <LocationOnOutlined sx={{ fontSize: 24 }} />
        <span className="text-[10px] font-medium uppercase">Locations</span>
      </Link>

      <div className="hidden md:block h-8 w-px bg-gray-200"></div> */}

      <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-teal-600 transition-colors p-1">
        <PersonOutline sx={{ fontSize: { xs: 26, md: 24 } }} />
        <span className="hidden md:block text-[10px] font-medium uppercase">
          {user ? `Hello, ${user?.name}` : "Account"}
        </span>
      </button>

      <Link
        href="/cart"
        className="relative flex flex-col items-center gap-1 text-gray-500 hover:text-teal-600 transition-colors p-1"
      >
        <ShoppingCartOutlined sx={{ fontSize: { xs: 26, md: 24 } }} />

        <span className="absolute -right-1 -top-1 ">{cartItems.quantity}</span>

        <span className="hidden md:block text-[10px] font-medium uppercase">
          Cart
        </span>
      </Link>
    </div>
  );
};

export default HeaderActions;
