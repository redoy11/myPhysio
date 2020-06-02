import * as React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import Slider from '../Slider';
import './Home.css';
import Services from '../Services';

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <Container className="home-container">
        <Paper className="home-body" elevation={5}>
          <Grid className="description-section" container={true} justify="center" alignItems="center">
            <Grid className="description-container" item={true}>
              <Typography color="textSecondary" className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum, nulla ut molestie porta, nisi
                dolor convallis sapien, vitae molestie ipsum leo sit amet felis. Praesent sed nisl vitae est maximus
                interdum vitae sit amet felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam
                interdum quam eget nisi porttitor dignissim. Aliquam mi ligula, placerat dignissim efficitur sit amet,
                euismod elementum nulla. Morbi finibus elit quis lorem posuere, sit amet convallis massa commodo.
              </Typography>
            </Grid>
          </Grid>
          <Grid className="services-section" container={true} justify="center">
            <Grid className="services-container" xs={12} item={true}>
              <Typography variant="h6" className="service-title">
                Services We provide
              </Typography>
              <Services />
            </Grid>
          </Grid>
          <Grid className="story-section" container={true} justify="center" alignItems="center">
            <Grid className="story-section-title" xs={12} item={true}>
              <Typography color="textSecondary" variant="h4">
                Latest Story
              </Typography>
            </Grid>
            <Grid className="story-description-container" xs={6} item={true}>
              <Typography variant="h3" className="story-title">
                Fight against Covid
              </Typography>
              <Typography variant="h6" className="story-title">
                Services We provide
              </Typography>
            </Grid>
            <Grid className="story-img-container" xs={6} item={true}>
              <Typography variant="h6" className="story-title">
                Services We provide
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
