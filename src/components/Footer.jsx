import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-white py-4 px-3 mt-5" style={{ backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 20, maxWidth: 1100, margin: 'auto' }} data-aos="fade-up">
      <p className="mb-4">Feel free to reach out through any platform below</p>

      <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">
        <a href="https://wa.me/201553480299" target="_blank" rel="noreferrer" className="social-icon">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.facebook.com/people/Mohamed-Shawky/pfbid02YtYA2sMUjmU4g8Q25yZySnk2pMmimmiJcUqfzuyhShX1Z4qcYpVQwYn3Zb5i298cl/?mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohamed-shawky-5a0b4a305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/mohamedshawky05" target="_blank" rel="noreferrer" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <p className="mb-0" style={{ color: '#cccccc', fontSize: 14 }}>&copy; 2025 Mohamed Shawky. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
