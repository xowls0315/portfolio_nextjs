import Header from "@/components/Header";
import "./globals.css";
import { SwiperNavProvider } from "@/src/context/SwiperNavContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SwiperNavProvider>
          <Header />
          {children}
        </SwiperNavProvider>
      </body>
    </html>
  );
}
