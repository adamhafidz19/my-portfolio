import { PortfolioContent } from "@/components/PortfolioContent";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { getDictionary } from "@/dictionaries";

export default function HomePage() {
  const dictionary = getDictionary("en");

  return (
    <SiteFrame locale="en" dictionary={dictionary} homeHref="/">
      <PortfolioContent dictionary={dictionary} />
    </SiteFrame>
  );
}
