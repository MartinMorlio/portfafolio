import Layout from "../components/Layout";
import { skills, experiences } from "../profile";

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
                  lorem ipsum dolor sit amet, consectetur adip bien, si usted
                  quiere generar el tradicional texto de Lorem Ipsum para no
                  distraer al lector con el contenido mientras que mira su
                  diseño, escriba y luego presione Intro. Automátic
                </p>
                <a href="/hireme">Contrátame</a>
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
              <div className="col-md-4">
                <div className="card">
                  <img src="" alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
