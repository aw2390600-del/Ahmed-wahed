import "./App.css";
import { useEffect, useState } from "react";

import profile from "./assets/profile.jpeg";
import nike from "./assets/nike.png";
import icecream from "./assets/icecream.png";
import businesscard from "./assets/businesscard.png";
import eno from "./assets/eno.png";
import king from "./assets/king.png";
import jewelry from "./assets/jewelry.png";
import pizza from "./assets/pizza.png";
import burger from "./assets/burger.png";
import mouse from "./assets/mouse.png";
import codepro from "./assets/codepro.png";
import restaurantCard from "./assets/restaurant-card.png";
import salad from "./assets/salad.png";
import pizzaCompare from "./assets/pizza-compare.png";
import pizzaOffer from "./assets/pizza-offer.png";
import burgerDay from "./assets/burger-day.png";

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
  {
    title: "ENO Beauty Brand Card",
    description:
      "Elegant skincare business card design with a soft feminine visual style.",
    image: eno,
    button: "View Design",
  },
  {
    title: "Al Malik Tire Company Card",
    description:
      "Bold Arabic business card design for a tire and wheel company.",
    image: king,
    button: "View Design",
  },
  {
    title: "Awlad Rezk Jewelry Card",
    description:
      "Luxury black and gold business card design for a jewelry brand.",
    image: jewelry,
    button: "View Design",
  },
  {
    title: "Pizza Advertisement Design",
    description:
      "Promotional pizza advertisement with strong colors and delivery focus.",
    image: pizza,
    button: "View Design",
  },
  {
    title: "Special Burger Advertisement",
    description:
      "Fast food promotional design with bold typography and discount highlight.",
    image: burger,
    button: "View Design",
  },
  {
    title: "Computer Mouse Advertisement",
    description:
      "Clean electronic product advertisement with a modern tech layout.",
    image: mouse,
    button: "View Design",
  },
  // NEW PROJECTS

{
  title: "Code Pro Business Cards",
  description: "Modern and professional business card design for a tech brand.",
  image: codepro,
  button: "View Design",
},
{
  title: "Restaurant Business Card",
  description: "Elegant restaurant card design with rich food visuals.",
  image: restaurantCard,
  button: "View Design",
},
{
  title: "Healthy Salad Advertisement",
  description: "Fresh and vibrant healthy food promotional design.",
  image: salad,
  button: "View Design",
},
{
  title: "Pizza Comparison Design",
  description: "Creative pizza design comparing different styles.",
  image: pizzaCompare,
  button: "View Design",
},
{
  title: "Pizza Offer Advertisement",
  description: "Bold promotional pizza design with strong call-to-action.",
  image: pizzaOffer,
  button: "View Design",
},
{
  title: "National Burger Day Campaign",
  description: "High-impact burger advertisement with modern layout.",
  image: burgerDay,
  button: "View Design",
},
];
function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cardStyle, setCardStyle] = useState({});

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("cursor-click");
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .hero-shape"
    );

    const addHover = () => cursor.classList.add("cursor-hover");
    const removeHover = () => cursor.classList.remove("cursor-hover");

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    setCardStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({
      transform:
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="page-bg">
      <div className="custom-cursor"></div>

      <div className="site-card">
        <nav className="navbar reveal">
          <div className="logo">Ahmed Wahed</div>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="menu-icon">☰</div>
        </nav>

        <section className="hero reveal" id="about">
          <div className="hero-text">
            <p className="hero-tag">
              Veterinary Medicine Student | Web Developer | Graphic Designer
            </p>

            <h1>
  Crafting Creative Designs | Digital Experiences
</h1>

<h2 className="hero-name">  | Ahmed Wahed |</h2>

            <p className="hero-description">
              I am a Veterinary Doctor with a strong interest in technology,
              web development, and graphic design. I enjoy building modern
              digital projects and creating clean visual designs with a balance
              between creativity and functionality.
            </p>

            <div className="hero-stats">
              <div className="stat-card">
                <h3>3+</h3>
                <p>Core Skills</p>
              </div>

              <div className="stat-card">
                <h3>10+</h3>
                <p>Creative Works</p>
              </div>

              <div className="stat-card">
                <h3>100%</h3>
                <p>Passion</p>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-wahed-919b4a338"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
            </div>

            <div className="social-buttons">
              <a
                href="https://www.instagram.com/__ahmed_wahed__?igsh=MzJzYWRweDZhMTE5"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/qr/HTBZT4BJEKV4D1"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp
              </a>

              <a
                href="https://www.behance.net/ahmedwahed18"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Behance
              </a>

              <a
                href="https://www.facebook.com/share/1TpWSwesk8/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Facebook
              </a>

              <a
                href="https://t.me/ahmedw201"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Telegram
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper reveal">
            <div
              className="hero-shape hero-tilt"
              style={cardStyle}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <img src={profile} alt="Ahmed Wahed" />
            </div>
          </div>
        </section>

        <section className="projects-section reveal" id="projects">
          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card reveal" key={project.title}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

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

        <footer className="footer reveal" id="contact">
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
            <h4>Let’s Connect</h4>
            <p>LinkedIn · Behance</p>
            <p>Instagram · Telegram</p>
          </div>
        </footer>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected project preview" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;