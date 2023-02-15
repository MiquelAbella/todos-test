import { Button } from "../Button/Button";
import "./navBar.css";

export const NavBar = () => {
  return (
    <div className="nav">
      <a href="/" className="nav-logo">
        LOGO
      </a>
      <Button text="Subscribe" color="primary" size="lg" />
      <a className="nav-item" href="/">
        Home
      </a>
      <a className="nav-item" href="/">
        Products
      </a>
      <a className="nav-item" href="/">
        Contact
      </a>
      <a className="nav-item" href="/">
        Shopping Cart
      </a>
    </div>
  );
};
