import React from 'react';

function Contact() {
  return (
    <section id="contact" className="text-center py-5 px-3" style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 20, maxWidth: 900, margin: '60px auto' }}>
      <h2 style={{ color: '#00ff80' }} data-aos="fade-up">Contact Me</h2>
      <p className="text-white mt-3 mb-4" data-aos="fade-up" data-aos-delay="100">
        Got a question, an opportunity, or just want to say hi? Feel free to reach out!
      </p>

      <form className="text-start" data-aos="fade-up" data-aos-delay="200">
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white">Your Name</label>
          <input type="text" className="form-control bg-dark text-white border-success" id="name" placeholder="Enter your name" required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">Email address</label>
          <input type="email" className="form-control bg-dark text-white border-success" id="email" placeholder="name@example.com" required />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label text-white">Message</label>
          <textarea className="form-control bg-dark text-white border-success" id="message" rows="4" placeholder="Write your message here..." required></textarea>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-success px-5 py-2" style={{ boxShadow: '0 0 10px #00ff80', transition: '0.3s ease' }}>
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
