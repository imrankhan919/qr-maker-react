import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-success">
      <div className="container">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            My QR Maker
          </Link>
          <Link className="nav-link float-end text-light" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
