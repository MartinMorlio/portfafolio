import Layout from "../components/Layout";
import { projects } from "../profile";


const Proyectos = () => (
    <Layout footer={false}>
        <h1>Proyectos</h1>
        <div className="row">
        <div className="">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
              {projects.map((pr, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img src={pr.image} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{pr.name}</h3>
                      <p>{pr.description}</p>
                      <a href={pr.link}>Conoce más</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
)


export default Proyectos;