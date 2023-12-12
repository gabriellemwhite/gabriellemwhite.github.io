import React from "react";

function Header() {
  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <a className="no-text-decoration" href="/">
            Gabrielle White
          </a>
        </h1>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="navigation" className="collapse navbar-collapse flex-column">
            <div className="profile-section pt-3 pt-lg-0">
              <img
                className="profile-image mb-5 rounded-circle mx-auto"
                src={process.env.PUBLIC_URL + '/assets/images/profile.png'}
                title="Gabrielle White"
                alt="Gabrielle White Picture"
                href="/"
              />
              <div className="bio mb-3">
                Hi, my name is Gabrielle White and I'm a software engineer.
                Welcome to my personal website!
              </div>
              {/*//bio*/}
              <ul className="social-list list-inline py-2 mx-auto">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/gabriellemwhite/" 
                  title="LinkedIn">
                    <i className="fab fa-linkedin-in fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/gabriellemwhite"
                  title="GitHub">
                    <i className="fab fa-github-alt fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://medium.com/@gabriellemwhite"
                  title="Medium">
                  <i class="fa-brands fa-medium" />
                  </a>
                </li>
              </ul>
              {/*//social-list*/}
              <hr />
            </div>
            {/*//profile-section*/}
            <ul className="navbar-nav flex-column text-start">
              <li className="nav-item">
                <a className="nav-link active" href="#about-me">
                  <i className="fas fa-user fa-fw me-2" />
                  About Me<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <i className="fas fa-screwdriver-wrench fa-fw me-2" />
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  <i className="fas fa-laptop-code fa-fw me-2" />
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={process.env.PUBLIC_URL + 'assets/GabrielleWhite-SoftwareEngineer-Resume.pdf'} download>
                  <i className="fas fa-file-alt fa-fw me-2" />
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/*//force-overflow*/}
    </header>
  );
}

export default Header;
