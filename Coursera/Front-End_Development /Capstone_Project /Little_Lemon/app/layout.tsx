import Footer from "@/components/footer";
import Header from "@/components/header";
import { Karla, Markazi_Text } from "next/font/google";
import "./globals.css";

const markazi = Markazi_Text({ weight: ["400", "500"], subsets: ["latin"] });
const karla = Karla({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  title: "Little Lemon",
  description: "Coursera Capstone Project",
  metadataBase: new URL(defaultUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${markazi.className} ${karla.className}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="relative flex h-full flex-1 flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
