import Header from "@/components/ui/Header";
import "./globals.css";
import { SwiperNavProvider } from "@/context/SwiperNavContext";
import { neo } from "@/lib/font";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${neo.className} ${neo.variable}`}>
        <SwiperNavProvider>
          <Header />
          {children}
        </SwiperNavProvider>
      </body>
    </html>
  );
}
