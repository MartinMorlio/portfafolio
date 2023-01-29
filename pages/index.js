import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";

const Index = () => {
  return (
    <Layout>
      {/* Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="ImagenMia-modified.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Martín Morlio</h1>
                <h3>Full Stack Developer</h3>
                <p>
                  Soy una persona apasionada por la tecnología, trato de
                  mantenerme al tanto siempre, me gusta estudiar y aprender
                  constantemente. Me gusta trabajar en equipo, me considero
                  proactivo y dinámico, con un buen manejo de presión y de
                  grupo.
                </p>
                <Link legacyBehavior href="/blog">
                  <a>Contáctame</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second Section */}
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>

              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: "aquamarine",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experiencia</h1>
              <ul>
                {experiences.map((exp, i) => (
                  <li key={i}>
                    <h3>{exp.title}</h3>
                    <h4>{exp.where}</h4>
                    <h5>{exp.time}</h5>
                    <p>{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
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
  );
};

export default Index;
