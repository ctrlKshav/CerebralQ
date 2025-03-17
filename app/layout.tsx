import HeaderAuth from "@/components/header-auth";
import ThemeSwitcher from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/landing-page/footer";
import { TouchProvider } from "@/components/ui/tooltip-hybrid";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const defaultUrl =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.WEBSITE_URL}`
    : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Cerebral Quotient",
  description:
    "Discover yourself with tests like MBTI, Big Five, and IQ—all in one place.",
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
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      <Script id="hotjar-script" strategy="afterInteractive">
        {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
      </Script>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TouchProvider>
            <Toaster position="top-right" richColors />
            {children}
            <Footer />
            <ThemeSwitcher />
          </TouchProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
