import Link from "next/link";

const Navbar = () => {
  return (
    <div className='navbar bg-custom-color-dark text-text-custom-color-white fixed'>
      <div className='flex-1'>
      <Link className='btn btn-ghost normal-case text-xl text-yellow-500 ' href={"/4_link_navigation/CreateNewResume"}>
        Lawyer-AI
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal'>
          <li>
            <Link href={"/app/page.js"} className="">
             Create new resume
            </Link>  
          </li>
          <li>
            <details>
              <summary>📜</summary>
              <ul className='p-1 bg-base-100'>
                <li>
                  <Link href="/login">Log-in</Link>
                </li>
                <li>
                  <Link href={"/register"}>Register</Link>
                </li>
                <li>
                  <Link href={"/4_link_navigation/CreateNewResume"}>New resume</Link>
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
