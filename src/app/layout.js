import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navbar/page";
import Footer from "@/app/components/Footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
