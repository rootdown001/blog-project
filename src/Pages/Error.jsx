import Navbar from "../Navbar";

export default function Error() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="page-title error">404 Error - Page Not Found...</div>
      </div>
    </>
  );
}
