import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Portfolio App. All rights reserved.</p>

      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;