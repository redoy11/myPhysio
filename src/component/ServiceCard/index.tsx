import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ServiceCard: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5">adjective</Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
