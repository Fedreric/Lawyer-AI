"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";


export default function UploadFile() {
  const [file, setFile] = useState(null);
  const { data: session } = useSession();
  const [id, setId] = useState(0);
  useEffect(() => {
    if(session){
      setId(session.user.userId)
    }
  },[session]);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);
      data.append("userId", id);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data
      });
      if (!res.ok) throw new Error(await res.text());
      const resJson = await res.json(); //Esto tengo que guardar <-----
      console.log(resJson.resume)
      // Redireccionando al Result Resume (Aqui necesito instansear el resJson.resumen con el estado global de zustand y leerlo desde la page result resume y bloquear el text area para que solo muestre el texto)
      router.push("/ResultResume");
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
            accept='.pdf'
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
