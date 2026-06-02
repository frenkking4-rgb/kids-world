"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

const locales = [
  { code: "en", label: "EN", full: "English" },
  { code: "ru", label: "RU", full: "Русский" },
  { code: "az", label: "AZ", full: "Azərbaycan" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = locales.find((l) => l.code === locale) || locales[0];

  const handleSwitch = (code: string) => {
    setOpen(false);
    // Replace the locale segment in the path
    const segments = pathname.split("/");
    segments[1] = code;
    router.push(segments.join("/"));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-sm font-nunito font-600 transition-all duration-200"
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-2xl shadow-xl shadow-purple-100/60 border border-purple-50 z-50 overflow-hidden">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => handleSwitch(l.code)}
                className={`w-full text-left px-4 py-2.5 text-sm font-nunito font-600 transition-colors hover:bg-purple-50 flex items-center justify-between ${
                  l.code === locale
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-600"
                }`}
              >
                <span>{l.full}</span>
                <span className="text-xs text-gray-400 font-500">{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
