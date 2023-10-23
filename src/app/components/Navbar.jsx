"use client";
import { login, user } from "@/helpers/icons";
import Link from "next/link";
import Logout from "./Logout";

const Navbar = () => {
  const usuario = sessionStorage.getItem("usuario");
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
          <li>
            <Link href={"/"} className='hover:text-text-custom-color-Details'>
              Create new resume
            </Link>
          </li>
          <li>
            <details className='md:mr-10'>
              <summary className='hover:text-text-custom-color-Details'>
                {user}
              </summary>
              <ul className='bg-custom-color-dark mt-10'>
                {usuario ? (
                  
                  <Logout></Logout>
                ) : (
                  <li className='w-auto'>
                    <Link
                      href='/login'
                      className='hover:text-text-custom-color-Details'
                    >
                      Login{login}
                    </Link>
                  </li>
                )}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
