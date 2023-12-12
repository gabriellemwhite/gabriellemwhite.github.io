import React, {  } from "react";
 
function Home() {
  return (
<>
  <div className="main-wrapper">
    <section className="about-me-section p-3 p-lg-5 theme-bg-light" id="about-me">
      <div className="container">
        <div className="profile-teaser row">
          <div className="col">
            <h2 className="name font-weight-bold mb-1">Gabrielle White</h2>
            <div className="tagline mb-3">Software Engineer</div>
            <div className="bio mb-4">
            I'm an early career Software Engineer with a foundation in 
            full-stack web/mobile development, data analytics, 
            and adeptness in a professional scrum work environment. 
            I'm eager to apply knowledge gained from my Computer Science degree obtained
            at Florida Atlantic University,
            and hands-on experience in enterprise-level software development 
            lifecycle and DevOps. I'm highly committed to ongoing learning of emerging 
            technologies and enthusiastic about collaborating with innovative
            and creative peers.
            </div>
            {/*//bio*/}
            <div className="mb-4">
              <a className="btn btn-primary me-2 mb-3" href="#portfolio">
                <i className="fas fa-arrow-alt-circle-right me-2" />
                <span className="d-none d-md-inline">View</span> Portfolio
              </a>
              <a className="btn btn-secondary mb-3" href={process.env.PUBLIC_URL + 'assets/GabrielleWhite-SoftwareEngineer-Resume.pdf'} download>
              <i className="fa-solid fa-download me-2" />
                <span className="d-none d-md-inline">View</span> Resume
              </a>
            </div>
          </div>
          {/*//col*/}
          <div className="col-md-5 col-lg-5">
            <img
              className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
              src={process.env.PUBLIC_URL + '/assets/images/about-me.jpg'}
              alt="A girl coding at her desk with a black cat"
              title="This image was created by Bing AI!"
              href="/"
            />
          </div>
        </div>
      </div>
    </section>

    {/*//skills-section*/}
    <section className="overview-section p-3 p-lg-5" id="skills">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-3">Skills</h2>
        <div className="section-intro mb-5">
    
        </div>
        <div className="row">
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <i className="fab fa-js-square" />
              </div>
              <h3 className="item-title">Vanilla JavaScript</h3>
              <div className="item-desc">
              
              </div>
            </div>
            {/*//item-inner*/}
          </div>
          {/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                
                <i className="fab fa-react me-2" />
                <i className="fab fa-angular me-2" />
              </div>
              <h3 className="item-title">React &amp; Angular</h3>
              <div className="item-desc">
              
              </div>
            </div>
            {/*//item-inner*/}
          </div>
          {/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <i className="fab fa-node-js" />
              </div>
              <h3 className="item-title">Node.js</h3>
              <div className="item-desc">
              
              </div>
            </div>
            {/*//item-inner*/}
          </div>
          {/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <i className="fab fa-python" />
              </div>
              <h3 className="item-title">Python &amp; Django</h3>
              <div className="item-desc">
              
              </div>
            </div>
            {/*//item-inner*/}
          </div>
          {/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <i className="fa-brands fa-android" />
              </div>
              <h3 className="item-title">Android</h3>
              <div className="item-desc">
              
              </div>
            </div>
            {/*//item-inner*/}
          </div>
          {/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <i className="fab fa-npm me-2" />
              </div>
              <h3 className="item-title">npm</h3>
              <div className="item-desc">
              
              </div>
            </div>
            {/*//item-inner*/}
          </div>
          {/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <i className="fab fa-html5 me-2" />
                <i className="fab fa-css3-alt" />
              </div>
              <h3 className="item-title">HTML &amp; CSS</h3>
              <div className="item-desc">
              
              </div>
            </div>
            {/*//item-inner*/}
          </div>
          {/*//item*/}
          <div className="item col-6 col-lg-3">
            <div className="item-inner">
              <div className="item-icon">
                <i className="fab fa-sass me-2" />
                <i className="fab fa-less" />
              </div>
              <h3 className="item-title">Sass &amp; LESS</h3>
              <div className="item-desc">
            
              </div>
            </div>
            {/*//item-inner*/}
          </div>
          {/*//item*/}
        </div>
        {/*//row*/}
      </div>
      {/*//container*/}
    </section>
    
    <div className="container">
      <hr />
    </div>
    <section className="featured-section p-3 p-lg-5"id="portfolio">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">
          Portfolio
        </h2>
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="card project-card">
              <div className="row no-gutters">
                {/* <div className="col-12 col-xl-5 card-img-holder">
                  <img
                    src="assets/images/project/project-1.jpg"
                    className="card-img"
                    alt="image"
                  />
                </div> */}
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="https://github.com/gabriellemwhite/Cryptock" className="theme-link">
                      Cryptocurrency / Stock Price Monitoring & News AndroidApp - Cryptock
                      </a>
                    </h5>
                    <p className="card-text">
                    Designed and developed a cryptocurrency/stock monitoring Android app enabling users to
                    access real-time market prices and news through RESTful APIs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html" />
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <i className="fas fa-eye me-2" />
                    View Case Study
                  </a>
                </div>
              </div>
              {/*//link-mask*/}
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}
          <div className="col-md-6 mb-5">
            <div className="card project-card">
              <div className="row no-gutters">
                {/* <div className="col-12 col-xl-5 card-img-holder">
                  <img
                    src="assets/images/project/project-2.jpg"
                    className="card-img"
                    alt="image"
                  />
                </div> */}
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="https://github.com/Neologic-Audio/reso-neo-playlist" className="theme-link">
                      Django Playlist Builder - Neologic Audio
                      </a>
                    </h5>
                    <p className="card-text">
                    Collaborated within a five-member team to conceptualize, design, and implement a
                    Django web application aimed at enhancing the user experience at Resonate, 
                    a community-owned music streaming service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html" />
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <i className="fas fa-eye me-2" />
                    View Case Study
                  </a>
                </div>
              </div>
              {/*//link-mask*/}
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}
          <div className="col-md-6 mb-5">
            <div className="card project-card">
              <div className="row no-gutters">
                {/* <div className="col-12 col-xl-5 card-img-holder">
                  <img
                    src="assets/images/project/project-3.jpg"
                    className="card-img"
                    alt="image"
                  />
                </div> */}
                <div className="col-12 col-xl-7">
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="project.html" className="theme-link">
                      Cryptocurrency Price Monitoring React.js + Firebase WebApp - Cryptek
                      </a>
                    </h5>
                    <p className="card-text">
                    Collaborated within a dynamic three-member team to conceptualize, create, and 
                    implement a React.js web application, 
                    seamlessly interfacing with RESTful APIs,
                    ensuring optimal functionality and real-time data retrieval
                    </p>
                  </div>
                </div>
              </div>
              <div className="link-mask">
                <a className="link-mask-link" href="project.html" />
                <div className="link-mask-text">
                  <a className="btn btn-secondary" href="project.html">
                    <i className="fas fa-eye me-2" />
                    View Case Study
                  </a>
                </div>
              </div>
              {/*//link-mask*/}
            </div>
            {/*//card*/}
          </div>
          {/*//col*/}

        </div>
        {/*//row*/}
        <div className="text-center py-3">
          <a href="#portfolio" className="btn btn-primary">
            <i className="fas fa-arrow-alt-circle-right me-2" />
            View Portfolio
          </a>
        </div>
      </div>
      {/*//container*/}
    </section>
    {/*//featured-section*/}
    <div className="container">
      <hr />
    </div>
  </div>
  {/*//main-wrapper*/}
</>

  );
}
 
export default Home;