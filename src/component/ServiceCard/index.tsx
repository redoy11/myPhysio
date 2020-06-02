import * as React from 'react';
import { Card, CardContent, Typography, Icon } from '@material-ui/core';
import './ServiceCard.css';

interface ServiceCardProps {
  iconName: string;
  title: string;
  body: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props: ServiceCardProps) => {
  const { iconName, title, body } = props;
  return (
    <Card className="service-card" variant="outlined">
      <CardContent>
        <Icon className="service-icon" color="primary">
          {iconName}
        </Icon>
        <Typography className="service-title" variant="h5">
          <strong>{title}</strong>
        </Typography>
        <Typography className="service-body" variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
