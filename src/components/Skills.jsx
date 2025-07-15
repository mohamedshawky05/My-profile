import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML5', value: 95, icon: 'html5' },
    { name: 'CSS3', value: 90, icon: 'css3' },
    { name: 'JavaScript', value: 85, icon: 'javascript' },
    { name: 'Bootstrap', value: 85, icon: 'bootstrap' },
    { name: 'Sass', value: 75, icon: 'sass' },
    { name: 'React', value: 80, icon: 'react' },
    { name: 'Git', value: 70, icon: 'git' },
    { name: 'GitHub', value: 80, icon: 'github' },
  ];

  return (
    <section id="skills" className="text-center py-5 px-3" style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 20, maxWidth: 900, margin: '60px auto' }}>
      <h2 style={{ color: '#00ff80' }}>My Skills</h2>
      <p className="text-white mt-3 mb-4">Here are some of the technologies I'm skilled at:</p>
      <div className="row justify-content-center">
        {skills.map((skill, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={idx * 100} key={idx}>
            <div className="bg-dark p-4 rounded shadow-sm text-white skill-card">
              <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} width="40" alt={skill.name} />
              <h5 className="mt-3" style={{ color: '#00ff80' }}>{skill.name}</h5>
              <div className="progress my-2" style={{ height: '10px' }}>
                <div className="progress-bar bg-success" style={{ width: `${skill.value}%` }}></div>
              </div>
              <small className="text-white">{skill.value}%</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
