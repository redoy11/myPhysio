import * as React from 'react';
import './Home.scss';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Header from './Header/Header';

const HOME_SECTION_COMPONENTS = ['home', 'about', 'services', 'review', 'news', 'contact'];

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <MDBContainer className="Home-container" fluid>
        {HOME_SECTION_COMPONENTS.map((sectComp, index) => (
          <MDBRow key={`home-section-` + index}>
            <MDBCol size="12">
              <section id={'section-' + sectComp}>{sectComp}</section>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBContainer>
    </React.Fragment>
  );
};

export default Home;
