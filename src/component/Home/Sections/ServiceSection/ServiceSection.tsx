import * as React from 'react';
import './ServiceSection.scss';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import ServiceCard from './ServiceCard/ServiceCard';
import { SERVICE_FIXTURES } from './ServiceFixtures';

const ServiceSection: React.FC = () => {
  return (
    <div className="ServiceSection-container">
      <div className="ServiceSection-title">
        <h2>
          <strong>Our Services</strong>
        </h2>
      </div>
      <div className="ServiceSection-body">
        <MDBContainer>
          <MDBRow>
            {SERVICE_FIXTURES.map((fixture, index) => (
              <MDBCol key={'service-fixture-' + index} md="4" xs="12">
                <ServiceCard {...fixture} />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default ServiceSection;
