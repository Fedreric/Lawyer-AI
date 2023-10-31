"use client";
import React, { useState } from "react";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);
      data.append("userId", 1);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data
      });
      if (!res.ok) throw new Error(await res.text());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className='bg-custom-color-dark text-text-custom-color-white p-4 mt-4'>
          <input
            className='text-xl w-full'
            type='file'
            name='file'
            onChange={(e) => setFile(e.target.files?.[0])}
            accept=".pdf"
          />
        </div>
        <div className='flex flex-col items-center p-24'>
          <button
            type='submit'
            value='Upload'
            className='p-4 bg-custom-color-dark text-text-custom-color-white mt-4 rounded-sm hover:bg-slate-900'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
