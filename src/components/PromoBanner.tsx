import { useState } from "react";
import { siteConfig } from "../siteConfig";

export function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!siteConfig.promotion.enabled || !visible) {
    return null;
  }

  return (
    <aside aria-label="Announcement" className="relative z-50 bg-brand-900 text-brand-50 px-4 py-2.5 text-xs font-medium text-center shadow-inner transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 sm:gap-3 flex-wrap pr-6 sm:pr-0">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/30 px-2.5 py-0.5 text-[11px] font-semibold text-brand-200 uppercase tracking-wider">
          Free Template
        </span>
        <p className="text-brand-100">
          {siteConfig.promotion.bannerText}{" "}
          <a
            href={siteConfig.promotion.bannerActionUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white underline underline-offset-4 hover:text-brand-300 transition-colors"
          >
            {siteConfig.promotion.bannerActionText}
          </a>
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-brand-300 hover:text-white transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </aside>
  );
}
