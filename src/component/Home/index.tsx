import * as React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';
import Slider from '../Slider';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Typography>
            This is the paragraph where you can write more details about your product. Keep you user engaged by
            providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't
            scroll to get here.
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Home;
