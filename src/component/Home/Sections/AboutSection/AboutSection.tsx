import * as React from 'react';
import './AboutSection.scss';

const AboutSection: React.FC = () => {
  return (
    <div className="AboutSection-container">
      <div className="AboutSection-text">
        <h3>
          <span style={{ color: '#2bbbad' }}>Meet</span> <br />{' '}
        </h3>
        <h3>
          <h1>
            <strong>Redwanur Rahman Shohagh</strong>,{' '}
          </h1>
          Head of Physiotherapy.
        </h3>
        <h5 style={{ color: 'gray' }}>
          MBBS, BDS, TS, MS.
          <br /> Asistant Professor, United.
        </h5>
      </div>
      <div className="AboutSection-img"></div>
    </div>
  );
};

export default AboutSection;
