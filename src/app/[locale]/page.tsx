import { notFound } from "next/navigation";
import { PortfolioContent } from "@/components/PortfolioContent";
import { getDictionary, isLocale, locales } from "@/dictionaries";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <PortfolioContent dictionary={getDictionary(locale)} />;
}
