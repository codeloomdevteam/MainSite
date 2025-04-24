import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <Link to="/">
          <aside>
            <img
              alt="CODELOOM"
              src="/codeloom_full_logo.png"
              className="md:w-60 w-40 mb-2"
            />
            <p className="card-title text-lg md:text-xl">CODE LOOM</p>
            <p>Your Vision, Our Framework</p>
            <p>&copy; 2025 Code Loom. All rights reserved.</p>
          </aside>
        </Link>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="">Web Application Development</a>
          <a className="">Software Product Development</a>
          <a className="">Mobile Application Development</a>
          <a className="">Maintenance & Support</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">
            <Link to="/">Home</Link>
          </a>
          <a className="link link-hover">
            <Link to="/services">Services</Link>
          </a>
          <a className="link link-hover">
            <Link to="/about">About</Link>
          </a>
          <a className="link link-hover">
            <Link to="/contact">Contact Us</Link>
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
