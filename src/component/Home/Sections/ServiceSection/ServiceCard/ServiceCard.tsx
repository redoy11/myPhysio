import * as React from 'react';
import './ServiceCard.scss';

export interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props: ServiceCardProps) => {
  const { img, title, description } = props;
  return (
    <div className="ServiceCard-container">
      <img src={'/myPhysio/' + img} width="200" height="150" alt="" />
      <h5>
        <strong>{title}</strong>
      </h5>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
