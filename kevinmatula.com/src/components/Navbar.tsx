import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        kevinmatula.com
      </Link>
    </nav>
  );
}
