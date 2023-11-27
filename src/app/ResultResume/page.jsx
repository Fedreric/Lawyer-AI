"use client";
import { useState, useEffect } from 'react';
import { back } from "@/helpers/icons";
import Link from "next/link";
import { useState } from "cohere-ai";
import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_APIKEY
});

const resumeContract = async (pdf) => {
  const prompt = `Summarize the following contract, highlighting the key points in the original language. Provide a concise yet comprehensive overview, emphasizing the crucial terms, conditions, and obligations outlined in the document. Ensure that the summary captures the essence of the contract while maintaining accuracy and clarity in the language used, please respect the original lenguage: ${pdf.text}`;

  const response = await cohere.generate({
    prompt
  });

  return response;
}

 


const DocGenerated = () => {
  const [contractSummary, setContractSummary] = useState('');

  const fetchcontractSummary = async () => {
    try {
      const response = await resumeContract(pdf)

      const summary = response?.data?.summary;
      setContractSummary(summary);
    } catch (error) {
      console.error('Error fetching contract summary:', error);
    }
  };

  useEffect(() => {
    fetchcontractSummary();
  }, []);

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
            value={contractSummary}
            readOnly
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
