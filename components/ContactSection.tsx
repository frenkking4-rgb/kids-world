"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: t("address_label"),
      value: t("address"),
      color: "from-pink-400 to-rose-500",
      bg: "bg-pink-50",
    },
    {
      icon: Phone,
      label: t("phone_label"),
      value: t("phone"),
      color: "from-purple-400 to-violet-500",
      bg: "bg-purple-50",
    },
    {
      icon: Mail,
      label: t("email_label"),
      value: t("email"),
      color: "from-blue-400 to-cyan-500",
      bg: "bg-blue-50",
    },
    {
      icon: Clock,
      label: t("hours_label"),
      value: t("hours"),
      color: "from-green-400 to-teal-500",
      bg: "bg-green-50",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-nunito font-600 text-pink-500 uppercase tracking-widest mb-3">
            ✦ {t("subtitle")} ✦
          </p>
          <h2 className="font-baloo font-800 text-4xl md:text-5xl text-gray-800">
            {t("title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <div
                key={i}
                className={`${item.bg} rounded-2xl p-5 flex items-center gap-4 border border-white shadow-sm`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-nunito text-xs text-gray-400 uppercase tracking-wider font-600">
                    {item.label}
                  </p>
                  <p className="font-nunito font-700 text-gray-700">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border border-purple-100 shadow-sm">
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="font-nunito text-sm text-gray-500">
                  Baku, Azerbaijan
                </p>
                <p className="font-nunito text-xs text-gray-400">
                  28 May Street
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder={t("form_name")}
                  required
                  className="w-full px-4 py-3.5 bg-white rounded-2xl border border-gray-100 font-nunito text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent shadow-sm transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("form_email")}
                  required
                  className="w-full px-4 py-3.5 bg-white rounded-2xl border border-gray-100 font-nunito text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent shadow-sm transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder={t("form_message")}
                  rows={5}
                  required
                  className="w-full px-4 py-3.5 bg-white rounded-2xl border border-gray-100 font-nunito text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent shadow-sm transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-nunito font-700 text-base transition-all duration-300 ${
                  sent
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-[1.02] shadow-lg shadow-pink-200 hover:shadow-xl"
                }`}
              >
                {sent ? (
                  "✓ Sent!"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t("form_submit")}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
