import * as React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from 'mdbreact';
import './Header.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <header>
      <MDBNavbar className="Header-container" expand="md" scrolling fixed="top">
        <MDBNavbarBrand href="/" className="Header-logo">
          <strong>Shanti Physio</strong>
        </MDBNavbarBrand>
        <div style={{ width: '50px' }} />
        <MDBNavbarToggler onClick={() => setIsOpen(!isOpen)}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </MDBNavbarToggler>
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Services</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">News</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="#">
                <MDBIcon fa icon="mobile" />
                {'  '}
                +88-019-29299495
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">
                <MDBIcon fab icon="facebook-f" />
                {'  '}
                Facebook Page
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">
                <MDBIcon fa icon="rss" />
                {'  '}
                Blog
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
  );
};

export default Header;
