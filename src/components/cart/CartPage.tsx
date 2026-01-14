"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { container, section, flexBetween, stack } from "@/utils/styles/layout";
import { h1, h2, h3, small, body, price,link } from "@/utils/styles/typography";
import { badge, btnPrimary, input } from "@/utils/styles/components";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  inStock: boolean;
}

const INITIAL_CART: CartItem[] = [
  {
    id: 1,
    name: "Advanced Vitamin C Serum",
    description: "30ml / Brightening & Anti-aging",
    price: 45.0,
    image: "",
    quantity: 1,
    inStock: true,
  },
  {
    id: 2,
    name: "Daily Moisturizer",
    description: "50ml / Hydrating Formula",
    price: 28.5,
    image: "",
    quantity: 2,
    inStock: true,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART);

  const handleRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, newQty: number) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

 
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.08; 
  const shipping = subtotal > 100 ? 0 : 10; 
  const total = subtotal + tax + shipping;

  
  if (cartItems.length === 0) {
    return (
      <div className={`${container} ${section} text-center`}>
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <h2 className={h2}>Your cart is empty</h2>
          <p className={body}>
            Looks like you have not added anything to your cart yet.
          </p>
          <Link href="/products" className={btnPrimary}>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={container}>
      <h1 className={`${h1} mb-8`}>Shopping Cart</h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
        {/* LEFT COLUMN: Cart Items */}
        <section className="lg:col-span-7">
          <ul
            className={`${stack} divide-y divide-gray-200 border-t border-b border-gray-200`}
          >
            {cartItems.map((item) => (
              <li key={item.id} className="flex py-6 sm:py-10">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-md overflow-hidden border border-gray-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className={h3}>
                          <Link
                            href={`/product/${item.id}`}
                            className="hover:text-teal-600"
                          >
                            {item.name}
                          </Link>
                        </h3>
                      </div>
                      <p className={`${small} mt-1`}>{item.description}</p>
                      <p className={`${price} mt-2`}>
                        ${item.price.toFixed(2)}
                      </p>

                      {item.inStock ? (
                        <p
                          className={`${badge} bg-teal-50 text-teal-700 mt-2`}
                        >
                          In Stock
                        </p>
                      ) : (
                        <p className={`${badge} bg-red-50 text-red-700 mt-2`}>
                          Out of Stock
                        </p>
                      )}
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      {/* Quantity Selector */}
                      <label
                        htmlFor={`quantity-${item.id}`}
                        className="sr-only"
                      >
                        Quantity, {item.name}
                      </label>
                      <div className="flex items-center gap-2">
                        <span className={small}>Qty</span>
                        <select
                          id={`quantity-${item.id}`}
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.id,
                              Number(e.target.value)
                            )
                          }
                          className={`${input} max-w-[80px] py-1.5`}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Remove Button */}
                      <div className="absolute top-0 right-0">
                        <button
                          type="button"
                          onClick={() => handleRemove(item.id)}
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove</span>
                          {/* X Icon SVG */}
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L10 8.586 5.707 4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* RIGHT COLUMN: Order Summary */}
        <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className={h2}>Order summary</h2>

          <div className="mt-6 space-y-4">
            <div className={flexBetween}>
              <p className={body}>Subtotal</p>
              <p className={h3}>${subtotal.toFixed(2)}</p>
            </div>

            <div className={`${flexBetween} border-t border-gray-200 pt-4`}>
              <div className="flex items-center">
                <p className={body}>Shipping estimate</p>
              </div>
              <p className={h3}>
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </p>
            </div>

            <div className={`${flexBetween} border-t border-gray-200 pt-4`}>
              <p className={body}>Tax estimate</p>
              <p className={h3}>${tax.toFixed(2)}</p>
            </div>

            <div className={`${flexBetween} border-t border-gray-200 pt-4`}>
              <p className={h3}>Order total</p>
              <p className={price}>${total.toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-6">
            <button type="button" className={`${btnPrimary} w-full`}>
              Checkout
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link href="/products" className={link}>
              Or continue shopping
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
