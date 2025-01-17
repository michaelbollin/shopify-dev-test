import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://quiz.michaelbollin.dev'),
  title: {
    default: 'Shopify Development Quiz',
    template: '%s | Shopify Development Quiz'
  },
  description: 'Test your knowledge of Shopify development with our comprehensive quiz. Learn about themes, APIs, webhooks, and more.',
  keywords: ['Shopify', 'development', 'quiz', 'themes', 'API', 'webhooks', 'learning'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quiz.michaelbollin.dev',
    siteName: 'Shopify Development Quiz',
    title: 'Shopify Development Quiz',
    description: 'Test your knowledge of Shopify development with our comprehensive quiz.',
    images: [
      {
        url: '/og-image.png',
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
    images: ['/og-image.png']
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
        <script
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
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
