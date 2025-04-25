import NavTheme from "./NavTheme";
import NavList from "./NavList";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { IoLanguage } from "react-icons/io5";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
  }

  namespace google {
    namespace translate {
      class TranslateElement {
        static InlineLayout: any;
        constructor(options: any, elementId: string);
      }
    }
  }
}

const NavBar = () => {
  const navigate = useNavigate();
  const [dropdownValue, setDropdownValue] = useState<string>("Language");

  useEffect(() => {
    const resetLanguageOptions = () => {
      const options = document.querySelectorAll("select option");
      if (options.length >= 3) {
        options[0].textContent = "English";
        options[1].textContent = "සිංහල";
        options[2].textContent = "தமிழ்";
      }
    };

    const interval = setInterval(resetLanguageOptions, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add CSS to hide Google Translate elements
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame, .goog-te-gadget-icon, #google_translate_element {
        display: none !important;
      }
      .skiptranslate {
        display: none !important;
      }
      body {
        top: 0 !important;
      }
    `;
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,si,ta",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Set dropdown value based on cookie
    const getLangFromCookie = () => {
      const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
      return match?.[1] || "en";
    };

    const currentLang = getLangFromCookie();
    setDropdownValue(currentLang);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;

    // Change language by modifying the cookie
    document.cookie = `googtrans=/en/${langCode}; path=/`;

    setDropdownValue(langCode);

    // Reload the page to apply translation
    setTimeout(() => window.location.reload(), 300);
  };

  const handleClick = () => {
    if (window.location.pathname === "/") {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("offer");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
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

        <div id="google_translate_element" style={{ display: "none" }}></div>
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
        <select
          value={dropdownValue}
          className="select w-fit mx-2"
          onChange={handleLanguageChange}
        >
          {/* <option disabled value="Language">
            Language
          </option> */}
          <option value="en" lang="en" data-i18n="false">
            English
          </option>
          <option value="si" lang="si" data-i18n="false">
            සිංහල
          </option>
          <option value="ta" lang="ta" data-i18n="false">
            தமிழ்
          </option>
        </select>

        <div className="dropdown dropdown-bottom dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            <label className="btn btn-circle swap swap-rotate">
              <input type="checkbox" />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
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
