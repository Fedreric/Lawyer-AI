'use client'
import { useState } from 'react';

const NewResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Aquí puedes manejar el archivo seleccionado
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-24 bg-bg-custom-color shadow-md">
      <div className="p-4 mt-4">
        <h1 className="text-black text-5xl text-center">Resume your contract and more</h1>
      </div>
      <div className="bg-gray-800 p-4 mt-4">
        <label className="text-2xl text-white">Contract.pdf:</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="text-white text-2xl bg-gray-600 p-2 w-full mt-2"
        />
      </div>
    </main>
  );
};

export default NewResume;
