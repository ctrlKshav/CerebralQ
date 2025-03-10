import HeaderAuth from "@/components/header-auth";
import ThemeSwitcher from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/landing-page/footer";

const defaultUrl = process.env.NODE_ENV === "production"
  ? `https://${process.env.WEBSITE_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Cerebral Quotient",
  description: "Discover yourself with tests like MBTI, Big Five, and IQ—all in one place.",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right" richColors />
          {children}
          <Footer />
          <ThemeSwitcher />
          
        </ThemeProvider>
      </body>
    </html>
  );
}
