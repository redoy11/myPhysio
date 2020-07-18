import * as React from 'react';
import './Home.scss';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Header from './Header/Header';

const HOME_SECTIONS = ['home', 'about', 'services', 'review', 'news', 'contact'];
const HOME_SECTION_COMPONENTS: React.Component[] = [];

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <MDBContainer className="Home-container" fluid>
        {HOME_SECTIONS.map((sectComp, index) => (
          <MDBRow key={`home-section-` + index}>
            <MDBCol size="12">
              <section id={'section-' + sectComp}>{HOME_SECTION_COMPONENTS[index] || null}</section>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBContainer>
    </React.Fragment>
  );
};

export default Home;
