import { useRouteError } from "react-router-dom";
import Navbar from "../Navbar";

export default function Error() {
  const error = useRouteError();

  return (
    <>
      <div>error - something is wrong</div>
    </>
  );
}
