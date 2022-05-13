import { useContext } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link, NavLink, NavbarText } from "../styling/LayoutTheme";
import FavoriteContext from "../../store/favorites-context";

export function Header() {
  const favoritesCtx = useContext(FavoriteContext);
  return (
    <div>
      <Navbar expand="xs" s>
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
          <NavbarText>({favoritesCtx.favorites.length})</NavbarText>
        </Nav>
      </Navbar>
    </div>
  );
}
