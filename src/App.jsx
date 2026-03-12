import "./App.css";
import profile from "./assets/profile.jpeg";
import nike from "./assets/nike.png";
import icecream from "./assets/icecream.png";
import businesscard from "./assets/businesscard.png";
import { useState } from "react";

const projects = [
  {
    title: "Nike Advertisement Design",
    description:
      "Creative advertising design for Nike brand showcasing modern sports style.",
    image: nike,
    button: "View Design",
  },
  {
    title: "Ice Cream Loyalty Card",
    description:
      "Loyalty card design for an ice cream shop with colorful and friendly style.",
    image: icecream,
    button: "View Design",
  },
  {
    title: "Personal Business Card",
    description:
      "Professional personal business card design with clean typography.",
    image: businesscard,
    button: "View Design",
  },
];
function App() {
   const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="page-bg">
      <div className="site-card">
        <nav className="navbar">
          <div className="logo">Ahmed Wahed</div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="menu-icon">☰</div>
        </nav>

        <section className="hero" id="about">
          <div className="hero-text">
            <p className="hero-tag">
              Veterinary Medicine Student | Web Developer | Graphic Designer
            </p>

            <h1>
              Hello, my name is
              <br />
              Ahmed Wahed
            </h1>

            <p className="hero-description">
                I am a Veterinary Doctor with a strong
              interest in technology, web development, and graphic design. I
              enjoy building modern digital projects and creating clean visual
              designs.
            </p>

            <div className="hero-buttons">

  <a href="#projects" className="btn btn-primary">
    Projects
  </a>

  <div className="social-buttons">

    <a href="https://www.linkedin.com/in/ahmed-wahed-919b4a338" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>

    <a href="https://www.instagram.com/__ahmed_wahed__?igsh=MzJzYWRweDZhMTE5" target="_blank" rel="noreferrer" className="btn btn-secondary">Instagram</a>

    <a href="https://wa.me/qr/HTBZT4BJEKV4D1" target="_blank" rel="noreferrer" className="btn btn-secondary">WhatsApp</a>

    <a href="https://www.behance.net/ahmedwahed18" target="_blank" rel="noreferrer" className="btn btn-secondary">Behance</a>

    <a href="https://www.facebook.com/share/1TpWSwesk8/" target="_blank" rel="noreferrer" className="btn btn-secondary">Facebook</a>

    <a href="https://t.me/ahmedw201" target="_blank" rel="noreferrer" className="btn btn-secondary">Telegram</a>

  </div>

</div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-shape">
              <img src={profile} alt="Ahmed Wahed" />
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} className="project-image" />

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button onClick={() => setSelectedImage(project.image)}>
  {project.button}
</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer" id="contact">
          <div className="footer-box">
            <h4>Ahmed Wahed</h4>
            <p>Veterinary Medicine Student</p>
            <p>Web Developer · Graphic Designer</p>
          </div>

          <div className="footer-box">
            <h4>Contact</h4>
            <p>01550994682</p>
            <p>aw2390600@gmail.com</p>
          </div>

          <div className="footer-box">
            <h4>LinkedIn</h4>
            <p>Ahmed Wahed</p>
            <p>Professional Profile</p>
          </div>
        </footer>
      </div>
      {selectedImage && (
  <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
    
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      
      <img src={selectedImage} alt="project" />

    </div>

  </div>
)}
    </div>
  );
}

export default App;