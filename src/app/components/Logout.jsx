"use client";
import { logout } from "@/helpers/icons";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <li className='w-auto'>
      <button onClick={signOut} className='hover:text-text-custom-color-Details'>
        Logout{logout}
      </button>
    </li>
  );
}
