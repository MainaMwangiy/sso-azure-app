import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import { LogOutButton } from "./LogOutButton.js";
import { useIsAuthenticated } from "@azure/msal-react";

export const NavBar = () => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          SSO Azure AD App
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {isAuthenticated ? (
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            ) : null}
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <LogOutButton />
              </li>
            ) : (
              <li className="nav-item">
                <LoginButton />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
