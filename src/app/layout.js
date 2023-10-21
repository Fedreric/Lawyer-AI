import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import History from "./components/History";
import Publicity from "./components/Publicity";

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
        {/* Si el usuario esta logueado */}
        {/* <section className='flex flex-col md:flex-row'>
            <History />
          <div className='w-full md:order-2'>{children}</div>
        </section> */}
        {/* Si el usuario NO esta logueado */}
        <section className='flex flex-col md:flex-row'>
            <Publicity />
          <div className='w-full' id="main">{children}</div>
        </section>
      </body>
    </html>
  );
}
