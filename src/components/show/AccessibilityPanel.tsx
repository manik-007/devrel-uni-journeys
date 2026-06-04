import { useEffect, useState } from "react";
import { Accessibility, X, Type, Contrast, Languages, RotateCcw } from "lucide-react";

const LANGUAGES = [
  { code: "", label: "Original (English)" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "hi", label: "हिन्दी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "mr", label: "मराठी" },
  { code: "ta", label: "தமிழ்" },
  { code: "bn", label: "বাংলা" },
  { code: "zh-CN", label: "中文 (简体)" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "ar", label: "العربية" },
  { code: "ru", label: "Русский" },
  { code: "tr", label: "Türkçe" },
];

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

function setGoogTransCookie(lang: string) {
  const value = lang ? `/en/${lang}` : "/en/en";
  const host = window.location.hostname;
  const parts = host.split(".");
  const root = parts.length > 1 ? "." + parts.slice(-2).join(".") : host;
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${root}`;
  document.cookie = `googtrans=${value};path=/;domain=${host}`;
}

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState("");

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem("a11y-prefs");
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setFontScale(p.fontScale ?? 100);
        setHighContrast(!!p.highContrast);
        setLanguage(p.language ?? "");
      } catch {}
    }
  }, []);

  // Apply + persist
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
    document.documentElement.classList.toggle("a11y-contrast", highContrast);
    localStorage.setItem(
      "a11y-prefs",
      JSON.stringify({ fontScale, highContrast, language })
    );
  }, [fontScale, highContrast, language]);

  // Inject Google Translate script once
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;
    const div = document.createElement("div");
    div.id = "google_translate_element";
    div.style.display = "none";
    document.body.appendChild(div);

    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        );
      }
    };
    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setGoogTransCookie(lang);
    // Reload so Google Translate re-applies cleanly
    setTimeout(() => window.location.reload(), 150);
  };

  const reset = () => {
    setFontScale(100);
    setHighContrast(false);
    changeLanguage("");
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open accessibility panel"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 left-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-110 transition-transform"
      >
        <Accessibility className="h-5 w-5" />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Accessibility options"
          className="notranslate fixed bottom-24 left-6 z-50 w-[min(92vw,320px)] rounded-2xl border border-border bg-card/95 backdrop-blur p-5 shadow-2xl animate-scale-in"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold flex items-center gap-2">
              <Accessibility className="h-4 w-4 text-primary" />
              Accessibility
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
              className="text-muted-foreground hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Font size */}
          <div className="mt-5">
            <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Type className="h-3.5 w-3.5" /> Text size · {fontScale}%
            </label>
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFontScale((v) => Math.max(80, v - 10))}
                className="h-9 w-9 rounded-lg border border-border bg-background hover:bg-secondary text-sm font-bold"
                aria-label="Decrease text size"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontScale(100)}
                className="h-9 flex-1 rounded-lg border border-border bg-background hover:bg-secondary text-xs"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setFontScale((v) => Math.min(150, v + 10))}
                className="h-9 w-9 rounded-lg border border-border bg-background hover:bg-secondary text-sm font-bold"
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>
          </div>

          {/* High contrast */}
          <div className="mt-5">
            <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <Contrast className="h-3.5 w-3.5" /> High contrast
            </label>
            <button
              type="button"
              onClick={() => setHighContrast((v) => !v)}
              aria-pressed={highContrast}
              className={`mt-2 w-full h-9 rounded-lg border text-xs font-semibold transition-colors ${
                highContrast
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:bg-secondary"
              }`}
            >
              {highContrast ? "Enabled" : "Disabled"}
            </button>
          </div>

          {/* Language */}
          <div className="mt-5">
            <label
              htmlFor="a11y-lang"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              <Languages className="h-3.5 w-3.5" /> Translate site
            </label>
            <select
              id="a11y-lang"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="mt-2 w-full h-10 rounded-lg border border-border bg-background px-2 text-sm"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
              Powered by Google Translate. The page reloads to apply the new
              language.
            </p>
          </div>

          <button
            type="button"
            onClick={reset}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 h-9 rounded-lg border border-border bg-background hover:bg-secondary text-xs"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset all
          </button>
        </div>
      )}
    </>
  );
}
