import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import History from "./components/History";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lawyer AI",
  description: ""
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar></Navbar>
        <section className='md:flex'>
          <div className='md:order-2 w-full'>{children}</div>
          <section className='h-screen md:w-[35%] flex flex-col bg-custom-color-dark pl-8 pr-4'>
          <History />
          </section>
        </section>
      </body>
    </html>
  );
}
