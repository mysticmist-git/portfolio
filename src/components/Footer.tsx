

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#f8f9fa",
      padding: "1rem 0",
      textAlign: "center",
      borderTop: "1px solid #e9ecef",
      marginTop: "2rem",
    }}>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#6c757d" }}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <div style={{ marginTop: "0.5rem" }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 0.5rem", color: "#6c757d", textDecoration: "none" }}>
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 0.5rem", color: "#6c757d", textDecoration: "none" }}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;