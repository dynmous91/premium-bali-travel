import type { Metadata } from "next";
import Script from "next/script";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import "./fleet-images.css";
import "./conversion.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    apple: "/apple-icon.png",
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18000492314"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18000492314');
            gtag('config', 'AW-18334126641');
            gtag('config', 'AW-16570112214');
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank') || (window.location = url);
                }
              };
              
              // Generate or retrieve transaction ID
              if (!window.transactionId) {
                window.transactionId = "TX-" + Date.now() + "-" + Math.random().toString(36).substring(2, 8).toUpperCase();
              }
              
              gtag('event', 'conversion', {
                'send_to': 'AW-18000492314/gQ9ACMnToNccEJrupodD',
                'value': 1.0,
                'currency': 'IDR',
                'transaction_id': window.transactionId,
                'event_callback': callback
              });
              gtag('event', 'conversion', {
                'send_to': 'AW-18334126641/LVb8CPGOzfscELGksqZE',
                'value': 1.0,
                'currency': 'IDR',
                'transaction_id': window.transactionId,
                'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `}
        </Script>
      </body>
    </html>
  );
}
