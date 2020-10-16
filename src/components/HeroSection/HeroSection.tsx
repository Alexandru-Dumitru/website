import React, { ReactElement } from 'react';
import Button from '../Button/Button';
import './HeroSection.css';
import '../../App.css';
import Background from '../../images/img-home.jpg';

interface Props {}

// eslint-disable-next-line no-empty-pattern
function HeroSection({}: Props): ReactElement {
  return (
    <div className="hero-container" style={{background: `url(${Background}) center center/cover no-repeat`}}>
      {/* <video src="videos/video-2.mp4" autoPlay loop muted /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
