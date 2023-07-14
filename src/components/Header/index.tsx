import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center shadow-lg ">
        <Link to='/'>
          <h1 className="flex flex-col justify-center items-center leading-5  font-medium text-lg text-blue-800">EmpireTech <span>Solutions</span></h1>
        </Link>
          <nav>
            <ul className="flex gap-4">
             <li>
              <Link to='/' className="text-base font-normal">
                Home
              </Link>
             </li>
             <li>
              <Link to='/dashboard'>
                Dasboard
              </Link>
             </li>
             <li>
              <Link to='/login'>
                Login
              </Link>
             </li>
            </ul>
          </nav>
      </div>
    </header>
  )
}
