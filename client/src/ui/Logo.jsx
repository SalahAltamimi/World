import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="z-[999]">
      <img src="/logo.png" alt="logo" className="h-12" />
    </Link>
  );
}

export default Logo;
