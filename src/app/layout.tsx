import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/providers/theme-providers";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "All in one dashboard for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en"
      suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={font.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
