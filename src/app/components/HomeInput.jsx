"use client";
import React, { useState } from "react";
// import pdfjs from "pdfjs-dist"

export const HomeInput = () => {
  const [hasfile, setHasfile] = useState(false);
  const [selectedfile, setSelectedfile] = useState();
  const [resumen, setResumen] = useState("resumen")
  console.log({ selectedfile });
  if (
    selectedfile &&
    selectedfile.type == "application/pdf" &&
    selectedfile.type == "application/document"
  ) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedfile);
    fileReader.onload();
  }

  const handleChange = (e) => {
    setSelectedfile(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsText (e.target.files[0]);
    fileReader.onload = async (event) => {
      console.log(fileReader)
      // const textArea = document.querySelector("#resumen")
      // textArea.textContent = fileReader.result
      // const data = new Uint8Array(event.target.result)
      // const pdf = await pdfjs.getDocument(data).promise
      // console.log(pdf)
      setResumen(fileReader.result)
    };
    setHasfile(true);
  };
  return (
    <>
      <div className="   p-4 mt-4 ">
        <h1 className="  text-black text-5xl text-center ">
          Resume your contract and more
        </h1>
      </div>
      <div className="bg-gray-800 p-4 mt-4">
        {hasfile ? (
          <textarea id="resumen" defaultValue={"resumen"} value={resumen} />
        ) : (
          <input
            className="text-2xl w-full"
            type="file"
            onChange={handleChange}
          />
        )}
      </div>
    </>
  );
};
