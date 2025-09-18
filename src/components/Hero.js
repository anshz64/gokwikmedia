import React from "react";
import "./Hero.css";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* =========================
          LEFT SIDE (TEXT CONTENT)
      ========================== */}
      <div className="hero-content">
        {/* Tag */}
        <div className="hero-tag-wrapper">
         <span className="hero-tag"></span>
         <div className="agency">
         <h4> DIGITAL MARKETING AGENCY</h4>
         </div>
        </div>

        {/* Heading */}
        <h1>Grow Your Brand Faster with GoKwik Media</h1>

        {/* Sub-text */}
        <p>
          We deliver data-driven digital marketing strategies that boost visibility, generate leads, and maximize ROI.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#services" className="btn-primary">
            Get Started
          </a>
          <button className="btn-play-circle">
            <div className="play-icon-wrapper">
              <FaPlay />
            </div>
          </button>
        </div>
      </div>

      {/* =========================
          RIGHT SIDE (MAIN IMAGE)
      ========================== */}
      <div className="hero-image-col">
        <img
          src="../assets/hero/hero.png"
          alt="Hero Illustration"
          className="hero-main-img"
        />
      </div>

      {/* =========================
          DECORATIVE ELEMENTS
      ========================== */}
      <img src="../assets/hero/dots.png" alt="dots" className="decor dots" />
      <img
        src="../assets/hero/shadow.png"
        alt="shadow"
        className="decor shadow-right"
      />
      <img src="../assets/hero/plane.png" alt="rocket" className="decor rocket" />
    </section>
  );
};

export default Hero;