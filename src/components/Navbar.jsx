import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-4 shadow" style={{ zIndex: 1000 }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img style={{ width: '60px', height: '55px', borderRadius: '50%' }} src="/logo.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <div className="navbar-nav">
            <a className="btn btn-outline-success mx-1 my-1" href="#">Home</a>
            <a className="btn btn-outline-success mx-1 my-1" href="#about">About Me</a>
            <a className="btn btn-outline-success mx-1 my-1" href="#projects">Projects</a>
            <a className="btn btn-outline-success mx-1 my-1" href="#skills">My Skills</a>
            <a className="btn btn-outline-success mx-1 my-1" href="#contact">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
