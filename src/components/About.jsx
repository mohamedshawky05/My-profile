import React from 'react';

function About() {
  return (
    <section id="about" className="text-center py-5 px-3" style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 20, maxWidth: 900, margin: '60px auto' }}>
      <h2 style={{ color: '#00ff80' }} data-aos="fade-up">About Me</h2>
      <div className="text-start mt-4 text-white" data-aos="fade-up" data-aos-delay="100">
        <p>
          Hello! I'm <strong>Mohamed Shawky</strong>, a passionate Frontend Developer with strong knowledge in
          <span style={{ color: '#00ff80' }}> HTML, CSS, JavaScript, Bootstrap, Sass, and React</span>.
        </p>
        <p className="mt-3">
          Since I was young, I've been curious about how things work – from TVs and radios to laptops and software.
          That curiosity led me to coding, where I found the perfect match for my love of problem-solving and building useful things.
        </p>
        <p className="mt-3">
          I enjoy turning ideas into real, responsive websites and applications. Every day I focus on improving my skills and learning new technologies.
          I believe strong fundamentals are the key to becoming a solid developer and being part of a strong, productive team.
        </p>
        <p className="mt-3">
          I'm currently deepening my knowledge of JavaScript and React, and I'm always excited to explore more about backend tools and deployment.
        </p>
        <p className="mt-3">✌️ Peace, and keep coding!</p>
      </div>
    </section>
  );
}

export default About;
