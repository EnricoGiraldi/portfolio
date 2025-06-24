import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaResearchgate, FaEnvelope } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Enrico Giraldi</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="social-icons">
        <a href="https://github.com/EnricoGiraldi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/enrico-giraldi-bbab24129/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.researchgate.net/profile/Enrico-Giraldi" target="_blank" rel="noopener noreferrer"><FaResearchgate /></a>
        <a href="mailto:your.email@example.com"><FaEnvelope /></a>
      </div>
    </header>
  );
}

export default Header;
