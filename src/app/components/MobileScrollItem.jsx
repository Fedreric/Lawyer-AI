import { arrowDown } from "@/helpers/icons";
import { useSession } from "next-auth/react";

export default function MobileScrollItem() {
  const { data: session } = useSession();
  return (
    <div className='h-[15em] flex items-end justify-center animate-pulse md:hidden'>
      <span className='flex flex-col items-center'>
        {session ? (
          <div className='text-xl'>Check you history!</div>
        ) : (
          <div className='text-xl'>More information</div>
        )}
        {arrowDown}
      </span>
    </div>
  );
}
