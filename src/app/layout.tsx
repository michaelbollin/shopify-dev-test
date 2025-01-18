import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://liquidquestions.com'),
  title: {
    default: 'Shopify Development Quiz',
    template: '%s | Shopify Development Quiz'
  },
  description: 'Test your knowledge of Shopify development with our comprehensive quiz. Learn about themes, APIs, webhooks, and more.',
  keywords: ['Shopify', 'development', 'quiz', 'themes', 'API', 'webhooks', 'learning'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://liquidquestions.com',
    siteName: 'Shopify Development Quiz',
    title: 'Shopify Development Quiz',
    description: 'Test your knowledge of Shopify development with our comprehensive quiz.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopify Development Quiz'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development Quiz',
    description: 'Test your knowledge of Shopify development with our comprehensive quiz.',
    images: ['/og-image.jpg']
  },
  icons: [
    { 
      rel: 'icon',
      url: '/favicon.svg',
      type: 'image/svg+xml'
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="michaelbollin"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#40DCA5"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          strategy="lazyOnload"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
