import Navbar from "../Navbar";

export default function Error404() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="page-title error">404 Error - Page Not Found...</div>
      </div>
    </>
  );
}
