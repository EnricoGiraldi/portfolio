import React from 'react';
import backgroundImage from '../assets/background.png';
import './Home.css';

function Home() {
  return (
    <div 
      className="home-container" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="quote">
        "The Wheel of Time turns, and Ages come and pass, leaving memories that become legend."
      </div>
      <h1>Enrico Giraldi</h1>
      <p>Psychologist • EEG researcher • AI enthusiast • Data Scientist</p>
    </div>
  );
}

export default Home;
