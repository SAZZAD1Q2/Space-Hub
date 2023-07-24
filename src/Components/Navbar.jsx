import { NavLink } from 'react-router-dom';
import logo from '../Logo/logo.PNG';
import '../Styles/Navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary border border-secondary-subtle border-end-0 border-top-0 border-start-0">
      <div className="container-fluid mx-4 p-1">
        <h3>
          <img src={logo} alt="logo" className="mx-2" />
          Space Travellers&apos; Hub
        </h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="p-lg-3 link">Rockets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/missions" className="p-lg-3 link">Missions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="p-lg-3 link">Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
export default Navbar;
