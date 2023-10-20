import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

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
        {children}
        <section class='h-screen flex flex-col bg-text-custom-color-dark px-8'>
          <div className='text-text-custom-color-white my-11'>
            <h2 className='text-3xl'>
              Hi <span className='text-text-custom-color-Details'>Lawyer!</span>
            </h2>
            <h4 className='text-2xl'>Check your History!</h4>
          </div>
          <div class='max-h-screen overflow-y-auto w-full'>
            <table class='min-w-full'>
              <tbody>
                <tr className='flex justify-between text-text-custom-color-white my-4'>
                  <td>10/20/2023</td>
                  <td>Contract.pdf</td>
                  <td>Download</td>
                </tr>
                <tr className='flex justify-between text-text-custom-color-white my-4'>
                  <td>10/20/2023</td>
                  <td>Contract.pdf</td>
                  <td>Download</td>
                </tr>
                <tr className='flex justify-between text-text-custom-color-white my-4'>
                  <td>10/20/2023</td>
                  <td>Contract.pdf</td>
                  <td>Download</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </body>
    </html>
  );
}
