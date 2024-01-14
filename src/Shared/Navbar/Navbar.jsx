import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IoMdLogIn } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-green-600 w-36">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className=" bg-green-800 text-white">
      <div className="navbar max-w-screen-xl mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-600 rounded-box  w-56"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="items-center">
                <div className="dropdown dropdown-end bottom-2">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle pr-3"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">8</span>
                    </div>
                  </div>
                </div>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-600 rounded-box w-52 "
                  >
                    {user ? (
                      <>
                        {user?.photoURL === "" || (
                          <img
                            className="w-12 rounded-full mx-auto"
                            alt="Tailwind CSS Navbar component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        )}
                      </>
                    ) : (
                      <>
                        <img src={user?.photoURL} alt="" />
                      </>
                    )}

                    <p className="text-center my-2">{user?.email}</p>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-outline btn-neutral btn-sm bg-white"
                    >
                      <IoLogOutOutline /> Logout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-neutral">
                  <IoMdLogIn /> Login
                </button>
              </Link>
            </>
          )}
          {/* user login section */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
