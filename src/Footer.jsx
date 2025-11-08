import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-content">
          <h2>Start a project</h2>
          <p>
            Interested in working together? We should queue up a time to chat.
            I'll buy the coffee.
          </p>
        </div>
        <a href="#contact" className="footer-btn"> Let’s do this</a>
      </div>

      <div className="footer-bottom">
        <div className="footer-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:giopatrick11@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-credit">
          Designed & built by <span className="highlight">Giopatrick</span> <br />
          <span className="footer-made">© 2025 | All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
