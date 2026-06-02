"use client";

import { useTranslations } from "next-intl";
import { ShieldCheck, Heart, Award } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  const features = [
    {
      icon: ShieldCheck,
      title: t("feature1_title"),
      desc: t("feature1_desc"),
      color: "from-green-400 to-teal-500",
      bg: "bg-green-50",
    },
    {
      icon: Heart,
      title: t("feature2_title"),
      desc: t("feature2_desc"),
      color: "from-pink-400 to-rose-500",
      bg: "bg-pink-50",
    },
    {
      icon: Award,
      title: t("feature3_title"),
      desc: t("feature3_desc"),
      color: "from-purple-400 to-violet-500",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-xl shadow-purple-100/50 border border-purple-50">
              {/* Big emoji display */}
              <div className="grid grid-cols-3 gap-4">
                {["🧸", "🚂", "🎨", "🌈", "📚", "🚀", "🎯", "⭐", "🎪"].map(
                  (emoji, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex items-center justify-center text-3xl hover:scale-110 transition-transform cursor-default border border-white shadow-sm"
                    >
                      {emoji}
                    </div>
                  )
                )}
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-5 py-4 shadow-xl border border-pink-100">
                <p className="font-baloo font-700 text-2xl text-purple-600">
                  2015
                </p>
                <p className="font-nunito text-xs text-gray-500">
                  Est. in Baku 🇦🇿
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-sm font-nunito font-600 text-pink-500 uppercase tracking-widest mb-3">
              ✦ {t("subtitle")} ✦
            </p>
            <h2 className="font-baloo font-800 text-4xl md:text-5xl text-gray-800 mb-6">
              {t("title")}
            </h2>
            <p className="font-nunito text-gray-500 leading-relaxed mb-4">
              {t("description1")}
            </p>
            <p className="font-nunito text-gray-500 leading-relaxed mb-10">
              {t("description2")}
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`${f.bg} rounded-2xl p-4 flex items-start gap-4 border border-white`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center flex-shrink-0 shadow-sm`}
                  >
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-baloo font-700 text-gray-800">
                      {f.title}
                    </h4>
                    <p className="font-nunito text-sm text-gray-500">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
