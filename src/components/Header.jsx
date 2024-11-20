import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { authContext } from "../Authprovider/AuthProvider";

const Header = () => {
  const { user, handleLogout } = useContext(authContext);

  return (
    <div className="text-center my-4">
     
      {user ? (
        <h1 className="text-2xl font-bold">
          Hi, <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">{user.displayName || user.email}!</span>
        </h1>
      ) : (
        <h1 className="text-2xl font-bold ">Hi,<span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent"> Guest!</span></h1>
      )}

      <div className="navbar w-11/12 mx-auto rounded-2xl p-2 text-black font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/learning'}>Start-learning</NavLink>
              <NavLink to={'/tutorials'}>Tutorials</NavLink>
              <NavLink to={'/about'}>About Us</NavLink>
              {user && <NavLink to={'/profile'}>My Profile</NavLink>}
            </ul>
          </div>
          <a className="text-xl font-extrabold">Lingo Bingo</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-4">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/learning'}>Start-learning</NavLink>
          <NavLink to={'/tutorials'}>Tutorials</NavLink>
          <NavLink to={'/about'}>About Us</NavLink>
          {user && <NavLink to={'/profile'}>My Profile</NavLink>}
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <button
              onClick={handleLogout}
              className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-11"
            >
              Logout
            </button>
          ) : (
            <NavLink to={'/login'}>
              <button className="btn bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-11">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
