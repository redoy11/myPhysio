import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar position="fixed">
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
