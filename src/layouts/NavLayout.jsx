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
  const isLoading = state === "loading";

  return (
    <>
      {/* call Navbar */}
      <Navbar />
      {/* ad ScrollRestoration to adjust scroll to top when changing pages */}
      <ScrollRestoration />
      {/* div with "container" arount Outlet for spinner */}
      <div className={isLoading ? "loading-spinner" : ""}></div>
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
