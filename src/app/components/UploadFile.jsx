"use client";

import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'  // Importa useRouter
import React, { useEffect, useState } from "react";
import useStore from "@/store/useTextarea";
import { toast } from "sonner";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const { data: session } = useSession();
  const [id, setId] = useState(0);
  const router = useRouter();  // Crea una instancia de useRouter

  useEffect(() => {
    if (session) {
      setId(session.user.userId);
    }
  }, [session]);

  const {setResume, setResumeList} = useStore();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    try {
      const toastId = toast.loading('Create resume...',{duration: 60000});
      const data = new FormData();
      data.set("file", file);
      data.append("userId", id);
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        toast.success('Resume complete!', { id: toastId, duration: 2000 });
      } else {
        throw new Error('Error, please try again...');
      }
      const resJson = await res.json();
      setResume(resJson);
      // Utiliza router.push para redirigir a la página ResultResume
      router.push("/ResultResume");
      setResumeList(session.user.userId)
    } catch (error) {
      console.error(error);
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