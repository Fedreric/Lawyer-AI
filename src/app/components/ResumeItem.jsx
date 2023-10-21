import { download } from "@/helpers/icons";

export default function ResumeItem({resume}) {
  return (
    <tr className='flex justify-between text-text-custom-color-white my-4 mr-4'>
      <td>{resume.date}</td>
      <td className="ml-2">{resume.name}.pdf</td>
      <td>
        <a href={resume.url} download={resume.name}>
          {download}
        </a>
      </td>
    </tr>
  );
}
