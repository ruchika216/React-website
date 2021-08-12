import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import vid from './../assets/video-1.mp4';
import { useHistory } from 'react-router';




function HeroSection() {

  const history = useHistory();

  const handleRoute = () => {
    history.push("/feature");
  }

  return (
    <div className='hero-container'>
      <video src={vid} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      <button
        type="submit"
        className="btn btn-outline-light btn-rounded "
        data-mdb-ripple-color="dark"
        onClick={handleRoute} >

        EXPLORE
      </button>

    </div>

  );
}

export default HeroSection;
