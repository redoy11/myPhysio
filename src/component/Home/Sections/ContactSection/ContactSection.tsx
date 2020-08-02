import * as React from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './ContactSection.scss';

const ContactSection: React.FC = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol>
          <div className="ContactSection-container">
            <div>
              <h1>
                <strong>Get in Touch</strong>
              </h1>
              <h6>
                You need more information? Check what other persons are saying about our services. <br />
                <br /> <span className="theme-color"> Spoiler Alert! </span> They love it.
              </h6>
            </div>
            <div>
              <h4>
                <strong>
                  <span className="theme-color">
                    <MDBIcon fas icon="map-marker" />
                  </span>{' '}
                  Find us at the center
                </strong>
              </h4>
              <p>
                <span className="theme-color">Shanti Physio</span> <br /> 257/1, South Goran, Shantipur, Khilgaon, Dhaka
                1219
              </p>
            </div>
            <div>
              <h4>
                <strong>
                  <span className="theme-color">
                    <MDBIcon fa icon="mobile" />
                  </span>{' '}
                  Give us a ring
                </strong>
              </h4>
              <p>
                <span className="theme-color">Shanti Physio Hotline</span> <br /> +88019-209425049, Mon-Fri, 10 am - 6
                pm
              </p>
            </div>
          </div>
        </MDBCol>
        <MDBCol>
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.058949306688!2d90.42906294975415!3d23.74527718451632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86cb492d043%3A0xde72bead965083b0!2sShantipur%20High%20School!5e0!3m2!1sen!2sbd!4v1596383184024!5m2!1sen!2sbd"
              width="450rem"
              height="450rem"
              frameBorder="0"
              style={{
                border: 0,
                borderRadius: `5px`,
                boxShadow: '0 4px 15px 0 rgba(0,0,0,0.16), 0 4px 30px 0 rgba(0,0,0,0.12)',
              }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default ContactSection;
