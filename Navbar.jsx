import { Link } from "react-router-dom";

function Navbar() {
  const logout = () => {
    localStorage.removeItem(
      "token"
    );
    window.location.href =
      "/login";
  };

  return (
    <nav>
      <Link to="/">
        Dashboard
      </Link>

      <Link to="/login">
        Login
      </Link>

      <Link to="/register">
        Register
      </Link>

      <button onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;