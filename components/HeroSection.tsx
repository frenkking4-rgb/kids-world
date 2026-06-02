"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";

const floatingEmojis = [
  { emoji: "🧸", top: "15%", left: "8%", delay: "0s", size: "text-3xl" },
  { emoji: "🚀", top: "25%", right: "6%", delay: "0.5s", size: "text-2xl" },
  { emoji: "🎨", top: "60%", left: "5%", delay: "1s", size: "text-2xl" },
  { emoji: "⭐", top: "70%", right: "8%", delay: "1.5s", size: "text-xl" },
  { emoji: "🌈", top: "10%", right: "20%", delay: "2s", size: "text-xl" },
  { emoji: "🎈", top: "80%", left: "18%", delay: "0.8s", size: "text-lg" },
];

export default function HeroSection() {
  const t = useTranslations("hero");

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Floating emojis */}
      {floatingEmojis.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.size} animate-float select-none pointer-events-none hidden lg:block`}
          style={{
            top: item.top,
            left: "left" in item ? item.left : undefined,
            right: "right" in item ? item.right : undefined,
            animationDelay: item.delay,
          }}
        >
          {item.emoji}
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-4 py-2 mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-nunito font-600 text-pink-600">
              {t("badge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-baloo font-800 text-5xl sm:text-6xl md:text-7xl leading-tight mb-6">
            <span className="text-gray-800">{t("headline1")} </span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("headline2")}
            </span>
            <br />
            <span className="text-gray-800">{t("headline3")}</span>
          </h1>

          <p className="font-nunito text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleScroll("#catalog")}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-nunito font-700 rounded-2xl shadow-lg shadow-pink-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t("cta_primary")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScroll("#about")}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-nunito font-700 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 shadow-sm transition-all duration-300"
            >
              {t("cta_secondary")}
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { value: t("stat1_value"), label: t("stat1_label") },
              { value: t("stat2_value"), label: t("stat2_label") },
              { value: t("stat3_value"), label: t("stat3_label") },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/80"
              >
                <div className="font-baloo font-700 text-2xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="font-nunito text-xs text-gray-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
