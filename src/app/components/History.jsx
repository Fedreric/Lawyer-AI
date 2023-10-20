import { resumes } from "@/helpers/resumesExpample";
import ResumeItem from "./ResumeItem";
export default function History() {
  return (
    <>
      <div className='text-text-custom-color-white mt-24 mb-4 md:mt-32'>
        <h2 className='text-3xl'>
          Hi <span className='text-text-custom-color-Details'>Lawyer!</span>
        </h2>
        <h4 className='text-2xl md:py-2'>Check your History!</h4>
      </div>
      <div className='max-h-screen overflow-y-auto w-full'>
        <table className='min-w-full'>
          <tbody>
            {
              resumes.map(resume => {
                return <ResumeItem key={resume.id} resume={resume}/>
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
