"use client";

import Image from "next/image";
import { AddShoppingCart } from "@mui/icons-material";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addToCart } from "@/lib/redux/features/cartSlice";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    //console.log("added")
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:border-teal-100 hover:shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50 p-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
          {product.category}
        </p>
        <h3
          className="mb-2 text-sm font-bold text-gray-900 line-clamp-2 min-h-[40px]"
          title={product.name}
        >
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-lg font-bold text-teal-700">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price)}
          </p>
          <button onClick={handleAddToCart}>
            <AddShoppingCart sx={{ fontSize: 20 }}  className="hover:text-teal-700 cursor-pointer"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
