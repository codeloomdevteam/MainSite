import NavTheme from "./NavTheme";
import NavList from "./NavList";
import { Link, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.location.pathname === "/") {
      // Already on home page, just scroll
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home first, then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("offer");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300); // small delay for page load
    }
  };

  return (
    <div className="navbar fixed top-0 right-0 left-0 bg-base-100 z-40 md:px-10">
      <div className="navbar-start">
        <div className="w-16 pr-4 lg:hidden">
          <Link to="/">
            <img alt="CODELOOM" src="/codeloom_icon.png" />
          </Link>
        </div>
        <div className="w-40 pr-4 hidden lg:block">
          <Link to="/">
            <img alt="CODELOOM" src="/codeloom_full_logo.png" />
          </Link>
        </div>

        {/* <a className="hidden lg:block">Code Loom</a> */}
      </div>

      <div className="navbar-center md:flex hidden">
        <ul className="menu menu-horizontal px-8">
          <NavList />
        </ul>
      </div>

      <div className="navbar-end">
        <div className="pr-4">
          <NavTheme />
        </div>
        <a className="btn bg-orange-400 text-white">
          <Link to="/contact">Talk with Us</Link>
        </a>
        <div className="dropdown dropdown-bottom dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            <label className="btn btn-circle swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <NavList />
          </ul>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={handleClick}
          className="relative btn btn-wide px-10 text-white text-sm py-2 rounded-lg shadow-md bg-indigo-600 hover:bg-indigo-600 transition"
        >
          Special Offer
          {/* Ping badge */}
          <span className="absolute -top-1 -right-1 flex">
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
