"use client";
import { createIcon, login, registerIcon, user } from "@/helpers/icons";
import Link from "next/link";
import Logout from "./Logout";
import { useSession } from "next-auth/react";
import { useRef, useEffect } from 'react';

const Navbar = () => {
  const { data: session } = useSession();
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute('open');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
                {createIcon}
              </Link>
            </li>
          <li>
            <details ref={detailsRef} className='mr-11'>
              <summary className='hover:text-text-custom-color-Details'>
                {user}
              </summary>
              <ul className='bg-custom-color-dark mt-10'>
                {!session ? (
                  <>
                    <li className='w-auto'>
                      <Link
                        href='/login'
                        className='hover:text-text-custom-color-Details'
                      >
                        Login{login}
                      </Link>
                    </li>
                    <li className='w-auto'>
                      <Link
                        href='/register'
                        className='hover:text-text-custom-color-Details'
                      >
                        Register{registerIcon}
                      </Link>
                    </li>
                  </>
                ) : (
                  <Logout></Logout>
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
