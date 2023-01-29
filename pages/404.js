import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>
        Esta página no existe. Por favor, vuelve a
        <Link legacyBehavior href="/">
          <a> Inicio</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
