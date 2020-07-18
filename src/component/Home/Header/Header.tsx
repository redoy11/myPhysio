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
import Scrollspy from 'react-scrollspy';

const NAV_ITEMS = [
  { label: 'Home', value: 'section-home' },
  { label: 'About', value: 'section-about' },
  { label: 'Services', value: 'section-services' },
  { label: 'News', value: 'section-news' },
  { label: 'Contact', value: 'section-contact' },
];

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
          <Scrollspy
            componentTag={MDBNavItem}
            items={NAV_ITEMS.map((navItem) => navItem.value)}
            currentClassName="Header-nav-item-active"
            className="navbar-nav mr-auto"
          >
            {NAV_ITEMS.map((navItem, index) => (
              <MDBNavItem key={'nav-item-' + index}>
                <a className="nav-link Ripple-parent active" href={'#' + navItem.value}>
                  {navItem.label}
                </a>
              </MDBNavItem>
            ))}
          </Scrollspy>

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
