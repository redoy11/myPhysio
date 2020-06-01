import * as React from 'react';
import { Grid, Paper } from '@material-ui/core';

const Services: React.FC = () => {
  return (
    <Grid container={true} justify="space-evenly">
      <Grid item xs={4}>
        <Paper>xs=3</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=3</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper>xs=3</Paper>
      </Grid>
    </Grid>
  );
};

export default Services;
