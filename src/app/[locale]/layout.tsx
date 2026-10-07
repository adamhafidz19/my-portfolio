import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { getDictionary, isLocale, locales } from "@/dictionaries";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dictionary = getDictionary(locale);

  return (
    <SiteFrame locale={locale} dictionary={dictionary}>
      {children}
    </SiteFrame>
  );
}
