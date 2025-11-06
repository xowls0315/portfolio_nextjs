import localFont from "next/font/local";

export const neo = localFont({
  src: [
    {
      path: "../../public/fonts/NeoDunggeunmoPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neo",
});
