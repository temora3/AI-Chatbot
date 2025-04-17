import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "../../components";

export const metadata: Metadata = {
  title: "AI Solar Water Assistant",
  description: "An intelligent solar-powered water assistant designed to optimize clean water access through smart monitoring, automation, and sustainable energy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"relative"}>
          <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
