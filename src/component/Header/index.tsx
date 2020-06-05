import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, useScrollTrigger, Icon } from '@material-ui/core';
import './Header.css';

const Header: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 120,
  });

  return (
    <React.Fragment>
      <AppBar
        style={{ transition: 'all ease-in-out 0.5s' }}
        color={trigger ? 'inherit' : 'transparent'}
        className={!trigger ? 'header-container' : ''}
        position="fixed"
      >
        {!trigger && (
          <Toolbar className="header-secondary-toolbar">
            <Typography variant="subtitle1" component="div">
              For service,
            </Typography>
            <>
              <Icon style={{ padding: '0px 10px' }}>phone</Icon>
            </>
            <Typography variant="subtitle1" component="div">
              01999999999
            </Typography>
          </Toolbar>
        )}
        <Toolbar className="header-primary-toolbar">
          <Typography variant="h4" className="nav-logo-item">
            <img src="/myPhysio/logo.png" width="120" />
          </Typography>
          <div className="nav-space-between" />
          <Typography variant="h6" className={trigger ? 'nav-item scroll-nav-item' : 'nav-item'}>
            Home
          </Typography>
          <Typography variant="h6" className={trigger ? 'nav-item scroll-nav-item' : 'nav-item'}>
            About
          </Typography>
          <Typography variant="h6" className={trigger ? 'nav-item scroll-nav-item' : 'nav-item'}>
            Page
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
