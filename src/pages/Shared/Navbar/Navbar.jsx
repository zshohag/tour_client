import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = ({ setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "SIGNOUT SUCCESSFUL",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuContainer = document.querySelector(".menu-container");
      if (menuOpen && menuContainer && !menuContainer.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="navbar w-full px-4">
      {/* Logo */}
      <div className="flex-none">
        <Link to="/">
          <img
            src="https://i.ibb.co/xhbxBMx/logo.png"
            className="w-20 sm:w-24 md:w-28 lg:w-36 h-auto mr-2"
            alt="Logo"
            style={{
              filter: "invert(100%) brightness(150%) contrast(200%)", // Makes the logo white
            }}
          />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="lg:flex-1 w-full lg:max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search Your Destination..."
          className="input input-bordered w-full bg-transparent border-white border-opacity-50 text-white placeholder-white"
          style={{ borderColor: "rgba(255, 255, 255, 0.5)" }} // Makes the border white and semi-transparent
          onChange={handleSearchChange}
        />
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user && (
            <li>
              <Link to="/managebookings">Bookings</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Fixed Login Button - Always Last */}
      <div className="flex-none">
        {user ? (
          <>
            <small className="ml-1">{user?.displayName?.slice(0,4)}</small>

            <button
              onClick={handleLogOut}
              className="btn btn-sm  bg-cyan-900 hover:bg-cyan-900 border-none rounded-none text-white ml-3 "
            >
              SIGN OUT
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm text-white bg-cyan-900 hover:bg-cyan-900 border-none rounded-none ml-2">
              LOGIN
            </button>
          </Link>
        )}
      </div>

      {/* Toggle Button and Menu for Small Screens */}
      <div className="flex-none md:hidden ml-2">
        <button className="btn btn-ghost text-white" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {menuOpen && (
          <div
            className="absolute right-2  mt-3 w-36 bg-white text-gray-800 shadow-lg rounded-none z-30 menu-container"
             // Temporary debugging style
          >
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-2 p-2 rounded-box w-full"
              onClick={() => setMenuOpen(false)} // Ensure menu closes after click
            >
              <li>
                <Link to="/" className="block p-2 hover:bg-gray-100">
                  Home
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    to="/managebookings"
                    className="block p-2 hover:bg-gray-100"
                  >
                    Bookings
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
