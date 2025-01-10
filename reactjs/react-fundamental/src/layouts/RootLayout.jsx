import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Link to="/">Home</Link> |{" "}
      <Link to="/blog" style={{ color: "whitesmoke" }}>
        Blog
      </Link>{" "}
      |{" "}
      <Link to="/about" style={{ color: "teal" }}>
        About
      </Link>
      <br />
      <Outlet />
    </>
  );
}

export default RootLayout;
