import * as React from 'react';
import './NewsCard.scss';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';

export interface NewsCardProps {
  img: string;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = (props: NewsCardProps) => {
  const { img, title, description } = props;
  return (
    <div className="NewsCard-container">
      <MDBCard>
        <MDBCardImage style={{ height: '15rem' }} className="img-fluid" src={'/myPhysio/' + img} waves />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <MDBBtn href="#">Read more...</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default NewsCard;
