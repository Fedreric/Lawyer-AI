import { logout } from "@/helpers/icons";

export default function Logout() {
    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
    }
  return (
    <li className='w-auto'>
      <button onClick={handleLogout} className='hover:text-text-custom-color-Details'>
        Logout{logout}
      </button>
    </li>
  );
}
