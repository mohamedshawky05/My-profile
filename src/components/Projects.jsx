import React from 'react';

function Projects() {
  const projectList = [
    {
      img: '/project/1.png',
      title: 'Play Tic Tac Toe Online – Fun & Simple XO Game',
      desc: 'Enjoy a smooth and interactive Tic Tac Toe (XO) game online. Challenge a friend or play solo in this clean and responsive design.',
      link: 'https://xo-games-1d74.vercel.app/',
    },
    {
      img: '/project/2.png',
      title: 'Smart Task Manager – Organize Your Work Easily',
      desc: 'Stay productive with this simple and effective task management app. A clean interface for your daily tasks.',
      link: 'https://task-management-lemon-seven.vercel.app/',
    },
    {
      img: '/project/4.png',
      title: 'Smart Inventory & Store Management System',
      desc: 'Manage products, track quantities, and export reports. Built with React for small business use.',
      link: 'https://store-management-zeta.vercel.app',
    },
    {
      img: '/project/3.png',
      title: 'Inte_nse – Personal Portfolio Website Template',
      desc: 'A sleek HTML/CSS portfolio template for developers and creatives to showcase their work.',
      link: 'https://mohamedshawky05.github.io/Inte_nse/',
    },
    {
      img: '/project/5.png',
      title: 'Weather App – Real-Time Weather Forecast',
      desc: 'User-friendly app that fetches weather API data for any city in real-time.',
      link: 'https://mohamedshawky05.github.io/weather/',
    },
    {
      img: '/project/6.png',
      title: 'BooksHuD – Discover & Explore Your Favorite Books',
      desc: 'Book discovery platform categorized by genre, clean UI and responsive layout.',
      link: 'https://mohamedshawky05.github.io/B00ksHuD/',
    },
  ];

  return (
    <section id="projects" className="text-center py-5 px-3" style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 20, maxWidth: 1100, margin: '60px auto' }}>
      <h2 style={{ color: '#00ff80' }} data-aos="fade-up">My Projects</h2>
      <p className="text-white mt-3 mb-4" data-aos="fade-up" data-aos-delay="100">
        Here are some of the projects I built using my frontend skills:
      </p>
      <div className="row justify-content-center">
        {projectList.map((proj, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in" data-aos-delay={idx * 100} key={idx}>
            <div className="card bg-dark text-white border-success shadow-sm h-100 project-card">
              <img src={proj.img} className="card-img-top" alt={`Project ${idx + 1}`} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#00ff80' }}>{proj.title}</h5>
                <p className="card-text">{proj.desc}</p>
                <a href={proj.link} className="btn btn-outline-success mt-2" target="_blank" rel="noreferrer">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
