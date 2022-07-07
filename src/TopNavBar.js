import { Link } from "react-router-dom";

function TopNavBar() {
  return (
    <nav
      style={{ textAlign: "center", marginTop: "20px", marginBottom: "10px" }}
    >
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="login">
        <button>Login</button>
      </Link>
      <Link to="contact">
        <button>Contact</button>
      </Link>
    </nav>
  );
}

export default TopNavBar;
