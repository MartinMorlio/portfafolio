import Navbar from "./NavBar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouter = (url) => {
      console.log(url);
      nProgress.start();
    };
    router.events.on("routeChangeStart", handleRouter);

    router.events.on("routeChangeComplete", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouter);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Portafolio de Martín Morlio</h1>
          <p>2001 - {new Date().getFullYear()}</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
