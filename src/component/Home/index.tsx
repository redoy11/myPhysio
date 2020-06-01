import * as React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import Slider from '../Slider';
import './Home.css';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <Container maxWidth="md">
        <Paper elevation={5}>
          <Grid className="description-container" container={true} justify="center" alignItems="center">
            <Grid className="description-item-container" item={true}>
              <Typography className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum, nulla ut molestie porta, nisi
                dolor convallis sapien, vitae molestie ipsum leo sit amet felis. Praesent sed nisl vitae est maximus
                interdum vitae sit amet felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
                interdum quam eget nisi porttitor dignissim. Aliquam mi ligula, placerat dignissim efficitur sit amet,
                euismod elementum nulla. Morbi finibus elit quis lorem posuere, sit amet convallis massa commodo.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Home;
