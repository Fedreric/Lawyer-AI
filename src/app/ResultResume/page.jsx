"use client";
import { back } from "@/helpers/icons";
import Link from "next/link";

const DocGenerated = () => {
  return (
    <>
      <main className='flex h-screen min-h-full flex-col items-center p-4 sm:p-24 bg-bg-custom-color shadow-md'>
        <div className='p-4 mt-4'>
          <h1 className='text-black text-3xl text-center'>
            Awesome! This is your contract resume
          </h1>
        </div>
        <div className='w-full h-full custom-color-dark p-4 mt-4'>
          <textarea
            rows={8}
            className=' w-full h-[80%] text-white bg-custom-color-dark p-2'
            placeholder='Your contract resume text here'
          ></textarea>
          <section className='flex flex-col items-center md:flex-row md:justify-between gap-2'>
            <div className='flex justify-center bg-custom-color-dark w-full rounded-sm'>
              <button className='w-full bg-custom-color-dark text-center text-white px-4 py-2 rounded hover:bg-slate-900'>
                DOWNLOAD PDF
              </button>
            </div>
            <div className='bg-custom-color-dark flex justify-center items-center'>
              <Link
                href='/'
                className='py-2 px-4 bg-custom-color-dark text-text-custom-color-white hover:bg-slate-900'
              >
                {back}
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default DocGenerated;
