import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
       <Link legacyBehavior href="/">
       <a className="navbar-brand" >
          Portafolio
        </a>
       </Link>
        <div className="">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link legacyBehavior href="/projects">
                <a className="nav-link" >
                  Proyectos 
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/github">
                <a className="nav-link" >
                  GitHub
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
