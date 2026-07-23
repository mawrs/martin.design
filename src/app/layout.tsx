import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: SITE.title,
  description:
    "Martin Tejeda is a Freelance Product Designer. Work across product, brand, and independent experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='dark'?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#F8F8F8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
