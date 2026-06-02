"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Star } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "catalog", href: "#catalog" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-pink-100/50"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-md shadow-pink-200 group-hover:scale-110 transition-transform">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-baloo text-xl font-800 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Kids World
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-nunito font-600 text-sm transition-all duration-200"
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => handleNavClick("#catalog")}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-nunito font-700 shadow-md shadow-pink-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-600 hover:bg-purple-50 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-pink-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-4 py-3 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-nunito font-600 transition-all"
            >
              {t(link.key)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
