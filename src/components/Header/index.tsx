import { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "redux/reduxHooks";
import { logout } from "redux/userSlice";

export default function Header() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const { accessToken } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleToggleMenuMobile = () => {
    setIsMenuMobileOpen((prev) => !prev);
  };

  const handleCloseMenuMobile = () => {
    setIsMenuMobileOpen(false);
  };

  const handleLogout = () => {
    setIsMenuMobileOpen(false);
    dispatch(logout());
  };

  return (
    <header className="w-full shadow-lg ">
      <div className="container mx-auto py-5 flex justify-between  items-center px-4">
        <Link to="/" onClick={() => handleCloseMenuMobile()}>
          <h1 className="flex flex-col justify-center items-center leading-5  font-medium text-xl text-blue-800 md:text-2xl md:leading-6">
            EmpireTech <span>Solutions</span>
          </h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="text-lg font-normal">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-lg font-normal">
                Dashboard
              </Link>
            </li>
            <li>
              {accessToken ? (
                <Link
                  to="/login"
                  className="text-lg font-normal"
                  onClick={() => handleLogout()}
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="text-lg font-normal">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>

        {/* Menu Mobile */}
        <button onClick={() => handleToggleMenuMobile()} className="md:hidden">
          {isMenuMobileOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </button>

        {isMenuMobileOpen ? (
          <nav className="w-full absolute top-20 left-0 py-10 bg-white shadow-lg md:hidden">
            <ul className="w-full flex flex-col items-center justify-center gap-7 ">
              <li>
                <Link
                  to="/"
                  className="text-base font-medium"
                  onClick={handleCloseMenuMobile}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-base font-medium"
                  onClick={handleCloseMenuMobile}
                >
                  Dasboard
                </Link>
              </li>
              <li>
                {accessToken ? (
                  <Link
                    to="/login"
                    className="text-base font-medium"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-base font-medium"
                    onClick={handleCloseMenuMobile}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
