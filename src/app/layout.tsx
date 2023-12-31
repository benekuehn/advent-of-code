import { GeistSans } from "geist/font/sans";
import { ReactNode } from "react";

import { GlobalWrapper } from "@/components/global-wrapper";
import "./global.css";

export const metadata = {
  // title: 'Next.js',
  // description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <GlobalWrapper>{children}</GlobalWrapper>
      </body>
    </html>
  );
}
