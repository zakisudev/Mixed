import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      {
        <Link to="/" id="logo">
          #VANLIFE
        </Link>
      }
      <div className="links">
        {<Link to="/about">About</Link>}
        {<Link to="/vans">Vans</Link>}
      </div>
    </div>
  );
}
