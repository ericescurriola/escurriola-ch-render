import { Outlet, NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <div className="pages">
          <NavLink to="/" className="page"> Home </NavLink>
          <NavLink to="/avatar" className="page"> Avatar </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Navigation;