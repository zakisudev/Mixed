import { NavLink, Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  const style = {
    color: 'red',
    textDecoration: 'underline',
  };
  return (
    <div className="navbar">
      {
        <Link to="/" id="logo">
          #VANLIFE
        </Link>
      }
      <div className="links">
        {
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            Host
          </NavLink>
        }
        {
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            About
          </NavLink>
        }
        {
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? 'active-link' : null)}
          >
            Vans
          </NavLink>
        }
      </div>
    </div>
  );
}
