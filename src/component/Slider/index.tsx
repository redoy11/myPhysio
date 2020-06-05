import * as React from 'react';
import './Slider.css';

const Slider: React.FC = () => {
  return (
    <React.Fragment>
      <div className="Slider-container">
        <div className="Slider-slide top">
          <div className="Slider-slide-content">
            <h1>Slide 1</h1>
            <p>
              Slide Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum, nulla ut
              molestie porta, nisi dolor convallis sapien, vitae molestie ipsum leo sit amet felis.
            </p>
          </div>
        </div>
        <div className="Slider-slide bottom">
          <div className="Slider-slide-content">
            <h1>Slide 2</h1>
            <p>
              Slide Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum, nulla ut
              molestie porta, nisi dolor convallis sapien, vitae molestie ipsum leo sit amet felis.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
