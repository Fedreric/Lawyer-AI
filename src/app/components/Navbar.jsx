import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-yellow-500 " >Lawyer-AI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='@/*Home'>Create new resume</a></li>
      <li>
        <details>
          <summary>
            📜
          </summary>
          <ul className="p-1 bg-base-100">
            <li><a href='@/*Navbar'>Log-in</a></li>
            <li><a>Register</a></li>
            <li><a>New resume</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  
</div>

    )
}
export default Navbar;