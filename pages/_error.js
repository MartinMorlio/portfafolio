import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout title="No se ha podido cargar la página." footer={false}>
      <p className="text-center">
        {statusCode
          ? `No se ha podido cargar la página: Error de estado ${statusCode}`
          : "No se pudo cargar esta página."}
      </p>
    </Layout>
  );
};

export default _error;