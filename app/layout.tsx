import HeaderAuth from "@/components/HeaderAuth";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/landing-page/Footer";
import { TouchProvider } from "@/components/ui/tooltip-hybrid";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const defaultUrl =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_WEBSITE_URL}`
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

      {/* Hotjar */}
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

      {/* Clarity */}
      <Script id="clarity-script" strategy="afterInteractive">
        {`  (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.CLARITY_ID}");`}
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
