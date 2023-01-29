import Navbar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
    </>
  );
};

export default Layout;
