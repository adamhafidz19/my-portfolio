import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DotGrid } from "@/components/ui/DotGrid";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Adam Hafidz | Frontend Software Engineer",
    template: "%s | Adam Hafidz",
  },
  description: "Frontend Software Engineer building accessible public digital services with React, Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="pointer-events-none fixed inset-0 z-0 opacity-75" aria-hidden="true">
            <DotGrid activeColor="#C2185B" baseColor="#D9B8C6" darkBaseColor="#121212" />
          </div>
          <div className="relative z-10 min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
