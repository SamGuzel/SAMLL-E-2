import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import PromptInput from "./components/PromptInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAMLL-E-2",
  description: "A DALL-E-2 clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <PromptInput />
        {children}
      </body>
    </html>
  );
}
