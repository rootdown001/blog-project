import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import Navbar from "../Navbar";

export default function NavLayout() {
  // get state from useLocation
  const { state } = useNavigation();

  return (
    <>
      {/* call Navbar */}
      <Navbar />
      {/* ad ScrollRestoration to adjust scroll to top when changing pages */}
      <ScrollRestoration />
      {/* div with "container" arount Outlet for spinner */}
      <div className={state === "loading" ? "loading-spinner" : ""}></div>
      <div className={state === "loading" ? "container loading" : "container"}>
        <Outlet />
      </div>
    </>
  );
}
