import { Kalam, Montserrat } from 'next/font/google';
import "./globals.css";
import NavBar from "@/app/components/navbar/page";
import Footer from "@/app/components/Footer/page";
import ScrollProgress from "@/app/components/ui/ScrollProgress";
const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});
const kalam = Kalam({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-section',
});
export const metadata = {
  title: "Sara Touahri | Software Engineer",
  description: "Personal website of Sara Touahri, a Software Engineer working across full-stack development, machine learning, and semantic systems.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${kalam.variable} bg-surface-background`}>
      <ScrollProgress />
      <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
