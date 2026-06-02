"use client";

import { useTranslations } from "next-intl";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("catalog");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const displayPrice = product.discount
    ? (product.price * (1 - product.discount / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-100/50 border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Card image area */}
      <div
        className={`relative h-44 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}
      >
        <span className="text-7xl select-none group-hover:scale-110 transition-transform duration-300">
          {product.emoji}
        </span>

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-nunito font-700 uppercase tracking-wide ${
              product.badge === "new"
                ? "bg-purple-500 text-white"
                : "bg-orange-400 text-white"
            }`}
          >
            {t(product.badge)}
          </div>
        )}

        {/* Discount */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-nunito font-700 px-2 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}

        {/* Stars */}
        <div className="absolute bottom-3 right-3 flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />
          ))}
        </div>
      </div>

      {/* Card content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <p className="text-xs text-purple-500 font-nunito font-600 uppercase tracking-wider mb-1">
            {t(product.category)}
          </p>
          <h3 className="font-baloo font-700 text-gray-800 text-lg leading-tight mb-2">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 font-nunito">
            {t("age")}: {product.ageMin}–{product.ageMax} {t("years")}
          </p>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <div>
            <span className="font-baloo font-700 text-xl text-gray-900">
              ₼{displayPrice}
            </span>
            {product.discount && (
              <span className="ml-2 text-sm text-gray-400 line-through font-nunito">
                ₼{product.price.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-nunito font-700 transition-all duration-200 ${
              added
                ? "bg-green-500 text-white scale-95"
                : "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 shadow-sm shadow-pink-200"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {added ? "✓" : t("add_to_cart")}
          </button>
        </div>
      </div>
    </div>
  );
}
