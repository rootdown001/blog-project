import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function NavLayout() {
  return (
    <>
      {/* call Navbar */}
      <Navbar />
      {/* div with "container" arount Outlet for spinner */}
      <div className={"container"}>
        <Outlet />
      </div>
    </>
  );
}
