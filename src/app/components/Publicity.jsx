import { arrowDown } from "@/helpers/icons";
import Link from "next/link";

export default function Publicity() {
  return (
    <section className='h-screen md:w-[40%] flex flex-col bg-custom-color-dark px-8'>
      <div className='text-text-custom-color-white mt-24 mb-4 md:mt-28'>
        <h2 className='text-3xl'>
          Welcome{" "}
          <span className='text-text-custom-color-Details'>Lawyer AI!</span>
        </h2>
      </div>
      <div className='max-h-screen overflow-y-auto w-full text-text-custom-color-white flex flex-col gap-8'>
        <p>Generate your contract summaries and much more easy</p>
        <p>
          You will be able to maintain a history of your summaries all in one
          place
        </p>
        <Link href={"/register"} className='text-text-custom-color-Details'>
          Register now! & Get your free acount!
        </Link>
        <p>
          or{" "}
          <Link href={"/login"} className='text-text-custom-color-Details'>
            Log in
          </Link>
        </p>
        <div className='h-[15em] flex items-end justify-center animate-pulse md:hidden'>
          <Link href={"#main"} className='text-xl flex'>
            Go to resume {arrowDown}
          </Link>
        </div>
      </div>
    </section>
  );
}
