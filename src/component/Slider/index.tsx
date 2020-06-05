import * as React from 'react';
import './Slider.css';

const Slider: React.FC = () => {
  return (
    <div className="Slider-container">
      <div className="Slider-slide top">
        <img src="/myPhysio/img_remedy.jpg" style={{ width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <h1>Slide 1</h1>
          <p>Slide Description</p>
        </div>
      </div>
      <div className="Slider-slide bottom">
        <img src="/myPhysio/img_foot.jpg" style={{ width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <h1>Slide 2</h1>
          <p>Slide Description</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
