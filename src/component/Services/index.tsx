import * as React from 'react';
import { Grid } from '@material-ui/core';
import ServiceCard from '../ServiceCard';

const Services: React.FC = () => {
  return (
    <Grid container={true} justify="space-evenly">
      <Grid item md={4} xs={12}>
        <ServiceCard />
      </Grid>
      <Grid item md={4} xs={12}>
        <ServiceCard />
      </Grid>
      <Grid item md={4} xs={12}>
        <ServiceCard />
      </Grid>
    </Grid>
  );
};

export default Services;
