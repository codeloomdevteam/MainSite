import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <li className="px-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/services"
          end
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
        >
          Services
        </NavLink>
      </li>
      {/* <li className="px-4">
        <NavLink
          to="/products"
          end
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
        >
          Products
        </NavLink>
      </li> */}
      <li className="px-4">
        <NavLink
          to="/about"
          end
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
        >
          About Us
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/contact"
          end
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
};

export default NavList;
