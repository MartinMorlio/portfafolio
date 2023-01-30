import Layout from "../components/Layout";
import Error from "./_error";

const GitHub = ({ user, statusCode }) => {
    if(statusCode) {
        return <Error />
    }
    console.log(user)
  return (
    <Layout footer={false}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img
              src='ImagenMia-modified.jpg'
              alt=""
              className="img-fluid"
            />
            <p>{user.bio}</p>
            <a href="/projects" target="_blank" className="btn btn-lg btn-dark my-1">
              <h5>Mis Proyectos</h5>
            </a>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-lg btn-dark my-1"
            >
              <h5>GitHub</h5>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Next.js me permite usar el front-end como servidor, puedo hacer peticiones y pasar su información.
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/MartinMorlio");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode
    },
  };
}

export default GitHub;
