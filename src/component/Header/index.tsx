import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h4">National Health</Typography>
          <Typography variant="h6">Call 0199999 to book appointment</Typography>
          <Typography variant="h6">Call 0199999 to book appointment</Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Page</Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
