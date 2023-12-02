import { deleteResume, download } from "@/helpers/helpersResume";
import { deleteIcon, downloadIcon } from "@/helpers/icons";
import useStore from "@/store/useTextarea";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ResumeItem({ resume }) {
  const { data: session } = useSession();
  const {setResumeList} = useStore();
  const date = new Date(resume.date);
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  const formatDate = `${day}/${month}/${year}`;

  const router = useRouter();

  const data = {
    text: resume.resumeContent,
    fileName: resume.name
  };

  const downloadPdf = () =>{
    download({resume, data});
  }

  const deleteRes = () =>{
    toast.warning('Delete: ', {
      description:  resume.name,
      action: {
        label: 'Yes',
        onClick: async () => {
          const res = await deleteResume(resume.resumeId)
          if(res.ok){
            toast.success('Delete resume!') 
            setResumeList(session?.user?.userId)
          }else{
            toast.error('Error! please try again..')
          } 
        }
      },
      cancel:{
        label: 'No'
      }
    })
  }

  return (
    <tr className='flex justify-between text-text-custom-color-white my-4 mr-4'>
      <td>{formatDate}</td>
      <td className='ml-2'>
        {resume.name.length > 10
          ? resume.name.slice(0, 15) + ".."
          : resume.name}
      </td>
      <td>
        <button onClick={downloadPdf}>{downloadIcon}</button>
      </td>
      <td>
        <button onClick={deleteRes}>{deleteIcon}</button>
      </td>
    </tr>
  );
}
