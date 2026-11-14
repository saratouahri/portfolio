import { Kalam, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navbar/page";
import Footer from "@/app/components/Footer/page";
import ScrollProgress from "@/app/components/ui/ScrollProgress";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-section",
});
export const metadata = {
  metadataBase: new URL("https://www.sara-touahri.com"),
  applicationName: "Sara Touahri",
  title: "Sara Touahri | Software Engineer",
  description:
    "Personal website of Sara Touahri, a Software Engineer working across full-stack development, machine learning, and semantic systems.",
  authors: [{ name: "Sara Touahri", url: "https://www.sara-touahri.com" }],
  creator: "Sara Touahri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${kalam.variable} bg-surface-background`}
      >
        <ScrollProgress />
        <NavBar />
        {children}
        <Analytics />
        <SpeedInsights /> <Footer />
      </body>
    </html>
  );
}
