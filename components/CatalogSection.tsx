"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { products, Category } from "@/lib/products";
import ProductCard from "./ProductCard";

type Filter = "all" | Category;

const categories: Filter[] = ["all", "toys", "educational", "outdoor", "arts"];

const categoryEmojis: Record<Filter, string> = {
  all: "✨",
  toys: "🧸",
  educational: "📚",
  outdoor: "🌳",
  arts: "🎨",
};

export default function CatalogSection() {
  const t = useTranslations("catalog");
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-nunito font-600 text-pink-500 uppercase tracking-widest mb-3">
            ✦ {t("subtitle")} ✦
          </p>
          <h2 className="font-baloo font-800 text-4xl md:text-5xl text-gray-800">
            {t("title")}
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-nunito font-700 text-sm transition-all duration-200 ${
                active === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-200 scale-105"
                  : "bg-gray-50 text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-100"
              }`}
            >
              <span>{categoryEmojis[cat]}</span>
              <span>{t(cat)}</span>
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 font-nunito">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
}
