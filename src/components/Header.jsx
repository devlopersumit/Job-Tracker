import { Link, NavLink } from "react-router-dom";

const linkClasses = ({ isActive }) =>
  `relative pb-1 transition-colors duration-300 ${
    isActive
      ? "text-blue-600 font-bold after:w-full"
      : "text-gray-600 hover:text-black"
  } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full`;

const Header = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-10 font-serif">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-4 justify-between">
        <h1 className="font-extrabold text-2xl basis-6/12">
          <Link to="/">Job<span className="text-blue-600">Tracker</span></Link>
        </h1>
        <div className="flex items-center justify-between basis-4/12">
          <NavLink to="/" className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/add-job" className={linkClasses}>
            Add Job
          </NavLink>
          <NavLink to="/analytics" className={linkClasses}>
            Analytics
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
