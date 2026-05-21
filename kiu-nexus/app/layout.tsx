import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MixpanelProvider } from "@/components/mixpanel-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "KIU Nexus",
  description:
    "One inbox for every course — assignments, exams, and announcements from Moodle, Teams, and WhatsApp in one ranked feed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MixpanelProvider />
        {children}
      </body>
    </html>
  );
}
