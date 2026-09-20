import type { ReactNode } from "react";
import type { Dictionary, Locale } from "@/dictionaries";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type SiteFrameProps = {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
  homeHref?: string;
};

export function SiteFrame({ children, dictionary, locale, homeHref }: SiteFrameProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar locale={locale} dictionary={dictionary} homeHref={homeHref} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
