import * as React from 'react';
import { Grid } from '@material-ui/core';
import ServiceCard from '../ServiceCard';
import { SERVICES } from './constants';

const Services: React.FC = () => {
  return (
    <Grid container={true} justify="space-evenly">
      {SERVICES.map((service, index) => (
        <Grid key={`service_${index}`} item md={4} xs={12}>
          <ServiceCard {...service} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
