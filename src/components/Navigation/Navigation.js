import { Outlet, NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <div className="pages">
          <NavLink to="/" className="page"> Home </NavLink> 
          <a href="https://postale.io/webmail/" target="blank" className="page"> Webmail </a>
          {/* <NavLink to="/portfolio" className="page"> Portfolio </NavLink> */}
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Navigation;