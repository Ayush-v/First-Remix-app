import { NavLink } from "@remix-run/react";

const activeStyle = {
  textDecoration: "underline",
  color: "#EC8A7A",
};

const NavBar = () => {
  return (
    <>
      <header className="flex justify-between items-center max-w-screen-2xl mx-auto p-8">
        <h1 className="text-3xl">
          <NavLink to="/" end>
            Logo
          </NavLink>
        </h1>
        <nav>
          <ul className="flex gap-5">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="api"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                api
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/test"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                test
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
