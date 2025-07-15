import React from 'react';
function Hero() {
  return (
    <section className="hero py-5 px-3 d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 text-center text-md-start hero-text mb-4 mb-md-0">
            <h1>
              Hey There, My Name is <span style={{ color: '#00ff80' }}>Mohamed</span>
            </h1>
            <p>
              I'm a Frontend Developer who loves building awesome things with code.<br />
              I enjoy reading, training, and learning something new every day.
            </p>
            <div className="mt-4">
              <a style={{color:'white'}} href="#skills" className="btn btn-custom me-2">My Skills</a>
              <a style={{color:'white'}} href="./public/Mohamedshawky.pdf" className="btn btn-outline-custom" download>Download CV</a>
            </div>
          </div>

          <div className="col-md-6 text-center hero-img">
            <img src="/12.png" alt="profile" className="img-fluid" style={{ maxWidth: '300px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
