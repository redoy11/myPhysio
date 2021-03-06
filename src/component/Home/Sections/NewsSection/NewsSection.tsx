import * as React from 'react';
import './NewsSection.scss';
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from 'mdbreact';
import NewsCard from './NewsCard/NewsCard';
import { NEWS_FIXTURES } from './NewsFixtures';

const NewsSection: React.FC = () => {
  return (
    <div className="NewsSection-container">
      <div className="NewsSection-title">
        <h2>
          <strong>Read our latest tips and news.</strong>
        </h2>
        <a href="#">
          <h6>
            <strong>
              Visit our blog for more. <MDBIcon fas icon="arrow-right" />
            </strong>
          </h6>
        </a>
      </div>
      <div className="NewsSection-body">
        <MDBContainer>
          <MDBRow>
            {NEWS_FIXTURES.map((fixture, index) => (
              <MDBCol key={'News-fixture-' + index} md="4" xs="12">
                <NewsCard {...fixture} />
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default NewsSection;
