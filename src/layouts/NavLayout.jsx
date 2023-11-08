import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Navbar";

export default function NavLayout() {
  return (
    <>
      {/* call Navbar */}
      <Navbar />
      {/* ad ScrollRestoration to adjust scroll to top when changing pages */}
      <ScrollRestoration />
      {/* div with "container" arount Outlet for spinner */}
      <div className={"container"}>
        <Outlet />
      </div>
    </>
  );
}
