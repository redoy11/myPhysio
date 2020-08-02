import * as React from 'react';
import './HomeSection.scss';
import { MDBBtn } from 'mdbreact';

const HomeSection: React.FC = () => {
  return (
    <div className="HomeSection-container">
      <h3>
        <strong>
          Looking for the <br />
          <span style={{ color: '#2bbbad' }}>Best</span> <br />{' '}
          <h1>
            <strong>Physiotherapy</strong>,{' '}
          </h1>
          Dhaka?
        </strong>
      </h3>
      <h5 style={{ color: 'gray' }}>
        <strong style={{ color: '#2bbbad' }}>Shanti Physio</strong> provides world-class, highly customizable services
        whether to relieve body pain or pave early recovery.
      </h5>
      <MDBBtn gradient="green">Learn More</MDBBtn>
    </div>
  );
};

export default HomeSection;
