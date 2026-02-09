import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Thursday Labs",
  description: "We make fandom-powered games for the next generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} font-roboto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
