"use client";
import useStore from "@/store/useTextarea";
import ResumeItem from "./ResumeItem";
import { useEffect } from "react";
export default function History({ session }) {
  const { userId } = session?.user;
  const { resumeList, setResumeList } = useStore();

  useEffect(()=>{
    setResumeList(userId)
  },[userId, setResumeList ])

  return (
    <section className='order-1 h-screen md:w-[35%] flex flex-col bg-custom-color-dark pl-8 pr-4'>
      <div className='text-text-custom-color-white mt-24 mb-4 md:mt-28'>
        <h2 className='text-3xl'>
          Hi{" "}
          <span className='text-text-custom-color-Details'>
            {session?.user?.name}!
          </span>
        </h2>
        <h4 className='text-2xl md:py-2'>Check your History!</h4>
      </div>
      <div className='max-h-screen overflow-y-auto w-full'>
        {
          resumeList?.length > 0 ? 
          <table className='min-w-full'>
          <tbody>
            {resumeList?.map((resume) => {
              return <ResumeItem key={resume.resumeId} resume={resume} />;
            })}
          </tbody>
        </table> :
        <div className="mt-10">
          <span className="text-xl text-text-custom-color-white"> Ups..</span>
          <h6 className='text-xl text-text-custom-color-white mt-5 md:py-2'>You dont have summaries, start now!</h6>
        </div>
        }
      </div>
    </section>
  );
}
