import Header from "@/components/Header";
import "./globals.css";
import { SwiperNavProvider } from "@/src/context/SwiperNavContext";
import { neo } from "@/src/styles/font";

export default function RootLayout({ children }) {
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
