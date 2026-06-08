import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "بینا — پلاتفۆرمی نیشتیمانی",
  description:
    "بینا: پلاتفۆرمێکی نیشتیمانی بۆ ڤیدیۆ، مۆسیقا، فێرکاری، کتێبخانە و میدیای کوردی.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ckb" dir="rtl">
      <body>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
