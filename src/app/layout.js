import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LateralLayout from "./components/LateralLayout";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lawyer AI",
  description: ""
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionAuthProvider>
          <Navbar></Navbar>
          <section className='flex flex-col md:flex-row'>
            <LateralLayout></LateralLayout>
            <div className='w-full md:order-2'>{children}</div>
            <Toaster closeButton richColors/>
          </section>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
