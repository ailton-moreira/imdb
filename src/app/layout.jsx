import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Providers from "@/app/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone App",
  description: "This is the IMDb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/**HEADER */}
          <Header />
          {/**NAVBAR */}

          {/**SearchBar */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
