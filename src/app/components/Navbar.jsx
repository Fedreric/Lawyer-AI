'use client'
import { login, user } from "@/helpers/icons";
import Link from "next/link";
import Logout from "./Logout";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const {data:session} = useSession();

  return (
    <div className='navbar bg-custom-color-dark text-text-custom-color-white fixed'>
      <div className='flex-1'>
        <Link
          className='btn btn-ghost normal-case text-xl text-text-custom-color-Details '
          href={"/"}
        >
          Lawyer-AI
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal'>
          {!session && (
            <li>
              <Link href={"/"} className='hover:text-text-custom-color-Details'>
                Create new resume
              </Link>
            </li>
          )}
          <li>
            <details className='md:mr-10'>
              <summary className='hover:text-text-custom-color-Details'>
                {user}
              </summary>
              <ul className='bg-custom-color-dark mt-10'>
                {!session ? (
                  <li className='w-auto'>
                    <Link
                      href='/login'
                      className='hover:text-text-custom-color-Details'
                    >
                      Login{login}
                    </Link>
                  </li>
                ) : (
                  <Logout></Logout>
                )}
                <li className="w-auto">
                <Link href='/register' className='hover:text-text-custom-color-Details'>
                  Register
                  </Link>
                  </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

{/* <li className="w-auto">
<Link href={"/register"} className='hover:text-text-custom-color-Details'>
  Register
</Link></li> */}