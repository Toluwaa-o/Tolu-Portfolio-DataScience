import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Toluwa's Portfolio",
  description:
    "Hello, my name is Toluwalashe Ogunleye. I am a Data Scientist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} max-w-[100vw] min-h-[100vh]`}>
        <header className="md:px-7 md:py-4 md:w-[65vw] md:m-auto">
          <Navbar />
        </header>
        <main className="md:w-[70vw] md:m-auto">{children}</main>
      </body>
    </html>
  );
}
