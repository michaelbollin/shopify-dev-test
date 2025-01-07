import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Test your knowledge",
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
          async
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
