import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div id="Navbar" className="flex justify-between">
      <h1 className="ml3 top">Math Magicians</h1>
      <nav id="NavbarList" className="mr5 self-center f4 b">
        <ul className="list flex">
          <li className="mr5">
            <NavLink className={`NavLink no-underline ${pathname === '/' ? 'red' : ''}`} to="/">
              Home
            </NavLink>
          </li>
          <li className="mr5">
            <NavLink className={`NavLink no-underline ${pathname === '/Calculator' ? 'red' : ''}`} to="Calculator">
              Calculator
            </NavLink>
          </li>
          <li className="mr5">
            <NavLink className={`NavLink no-underline ${pathname === '/Quote' ? 'red' : ''}`} to="Quote">
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>

  );
};
export default Navbar;
