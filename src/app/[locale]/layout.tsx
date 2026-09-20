import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { getDictionary, isLocale } from "@/dictionaries";

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

  return <SiteFrame locale={locale} dictionary={dictionary}>{children}</SiteFrame>;
}
