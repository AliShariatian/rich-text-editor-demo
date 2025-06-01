import { Geist, Geist_Mono, Vazirmatn, JetBrains_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export const jetBrains = JetBrains_Mono({
  variable: "--font-jetBrains",
  subsets: ["latin"],
});
