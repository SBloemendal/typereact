import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="App-layout">
      <nav>
        <Link to="/" className="App-link">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>

        <Link to="/account" className="App-link">
          Account
        </Link>
      </nav>
    </header>
  );
}

export default Header;
