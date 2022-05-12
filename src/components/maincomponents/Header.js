import { Navbar, Nav, NavItem } from "reactstrap";
import { Link, NavLink } from "../styling/LayoutTheme";

export function Header() {
  return (
    <Navbar expand="xs">
      <Link to="/" className="navbar-brand">
        Jokes
      </Link>
      <Nav navbar>
        <NavItem>
          <NavLink to="/categories" className="nav-link">
            Categories
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/favorites" className="nav-link">
            Favorite
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
