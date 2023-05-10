import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-background text-primary">
      <div className="navbar">
        <div className="navbar-start flex flex-row items-center">
          <span
            className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
            data-tip="Menu"
          >
            <label
              htmlFor="drawer"
              className="btn btn-square btn-ghost drawer-button"
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </span>
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              className="h-8 mr-3"
              alt="TrendingCoins Logo"
            />
            <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline">
              BUTANE
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="uppercase">blockchain</a>
            </li>
            <li>
              <a className="uppercase">features</a>
            </li>
            <li>
              <a className="uppercase">tokenomics</a>
            </li>
            <li>
              <a className="uppercase">roadmap</a>
            </li>
            <li>
              <a className="uppercase">team</a>
            </li>
            <li>
              <a className="uppercase">faq</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn hidden">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
