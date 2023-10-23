'use client'
import Link from "next/link"

const DocGenerated = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-4 sm:p-24 bg-bg-custom-color shadow-md">
        <div className="p-4 mt-4">
          <h1 className="text-black text-5xl text-center">Awesome! This is your contract resume</h1>
        </div>
        <div className="w-full h-full custom-color-dark p-4 mt-4">
          <textarea  rows={10} className=" w-full h-full text-white bg-custom-color-dark p-2" placeholder="Your contract resume text here"></textarea>
          <div className="w-100 bg-custom-color-dark p-4 mt-4">
          <button className="bg-custom-color-dark text-center text-white px-4 py-2 rounded hover:bg-blue-700">DOWNLOAD PDF</button>
        </div>
        </div>
        
        <div className="p-4 mt-4  bg-custom-color-dark">
        <button>
          <Link href="/">
             <spam className="bg-custom-color-dark hover:underline" >Back</spam>
          </Link>
        </button>
      </div>
      </main>
      
    </>
  );
};

export default DocGenerated;
