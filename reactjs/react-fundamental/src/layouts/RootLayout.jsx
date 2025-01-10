import { NavLink, Outlet } from "react-router-dom";
import "../styles/style.css";

function RootLayout() {
  return (
    <>
      <NavLink className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")} to="/" style={{ marginRight: "5px" }}>
        Home
      </NavLink>
      |
      <NavLink
        className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
        to="/blog"
        style={{ marginRight: "5px", marginLeft: "5px" }}
      >
        Blog
      </NavLink>
      |
      <NavLink className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")} to="/about" style={{ marginLeft: "5px" }}>
        About
      </NavLink>
      <br />
      <Outlet />
    </>
  );
}

export default RootLayout;
