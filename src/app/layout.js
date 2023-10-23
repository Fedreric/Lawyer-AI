import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LateralLayout from "./components/LateralLayout";

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
          <section className='flex flex-col md:flex-row'>
            <LateralLayout></LateralLayout>
            <div className='w-full md:order-2'>{children}</div>
          </section>
      </body>
    </html>
  );
}
