'use client';

import type { Metadata } from "next";
import "./globals.css";
import { useQuizStore } from "@/store/quizStore";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Test your knowledge",
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
  const initQuestions = useQuizStore(state => state.initQuestions);

  useEffect(() => {
    initQuestions();
  }, [initQuestions]);

  return (
    <html lang="en">
      <body>
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
        {children}
      </body>
    </html>
  );
}
