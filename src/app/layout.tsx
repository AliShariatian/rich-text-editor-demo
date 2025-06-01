import { FC, ReactElement, ReactNode } from "react";
import type { Metadata } from "next";

import { Footer, Header } from "@/components/layouts";

import { geistMono, geistSans, vazirmatn } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Rich Editor Demo | %s",
    default: "Rich Editor Demo",
  },
  description: "Rich Text Editor Demo",
};

type Props = Readonly<{
  children: ReactNode;
}>;

const RootLayout: FC<Props> = ({ children }): ReactElement => {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} font-vazirmatn layout bg-zinc-900 text-gray-200 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
