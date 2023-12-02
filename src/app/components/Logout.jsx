"use client";
import { logoutIcon } from "@/helpers/icons";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Logout() {
  const router = useRouter();
  const logout = () => {
    toast("Continue to log out?", {
      action: {
        label: "Yes",
        onClick: () => {
          signOut();
          router.push("/");
        }
      },
      cancel: {
        label: "No"
      }
    });
  };

  return (
    <li className='w-auto'>
      <button onClick={logout} className='hover:text-text-custom-color-Details'>
        Logout{logoutIcon}
      </button>
    </li>
  );
}
