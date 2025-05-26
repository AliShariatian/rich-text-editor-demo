import { FC, ReactElement, ReactNode } from "react";
import type { Metadata } from "next";

import { Footer, Header } from "@/components/layouts";

import { geistMono, geistSans, vazirmatn } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Rich Text Editor | %s",
    default: "Rich Text Editor",
  },

  description: "Rich Text Editor",
};

type Props = Readonly<{
  children: ReactNode;
}>;

const RootLayout: FC<Props> = ({ children }): ReactElement => {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} font-vazirmatn layout antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
