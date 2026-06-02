"use client";

import { useTranslations } from "next-intl";
import { Star, Share2, MessageCircle, Rss, Radio } from "lucide-react";

const navLinks = ["home", "catalog", "about", "contact"] as const;

export default function Footer() {
  const t = useTranslations();

  const handleScroll = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-md">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-baloo text-xl font-800 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Kids World
              </span>
            </div>
            <p className="font-nunito text-gray-400 text-sm leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>

            {/* Social */}
            <div className="mt-6">
              <p className="font-nunito text-xs text-gray-500 uppercase tracking-widest mb-3 font-600">
                {t("footer.social_title")}
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Share2, color: "hover:text-pink-400" },
                  { Icon: MessageCircle, color: "hover:text-blue-400" },
                  { Icon: Rss, color: "hover:text-red-400" },
                  { Icon: Radio, color: "hover:text-sky-400" },
                ].map(({ Icon, color }, i) => (
                  <button
                    key={i}
                    className={`w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 ${color} transition-all duration-200 hover:scale-110`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-nunito text-xs text-gray-500 uppercase tracking-widest mb-4 font-600">
              {t("footer.links_title")}
            </p>
            <ul className="space-y-3">
              {navLinks.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => handleScroll(key === "home" ? "home" : key)}
                    className="font-nunito text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {t(`nav.${key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-nunito text-xs text-gray-500 uppercase tracking-widest mb-4 font-600">
              {t("contact.address_label")}
            </p>
            <div className="space-y-3">
              <p className="font-nunito text-sm text-gray-400">
                📍 {t("contact.address")}
              </p>
              <p className="font-nunito text-sm text-gray-400">
                📞 {t("contact.phone")}
              </p>
              <p className="font-nunito text-sm text-gray-400">
                ✉️ {t("contact.email")}
              </p>
              <p className="font-nunito text-sm text-gray-400">
                🕐 {t("contact.hours")}
              </p>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-nunito text-xs text-gray-500">
            {t("footer.copyright")}
          </p>
          <p className="font-nunito text-xs text-gray-500 flex items-center gap-1">
            Made with ❤️ in Baku 🇦🇿
          </p>
        </div>
      </div>
    </footer>
  );
}
