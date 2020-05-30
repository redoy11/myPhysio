import * as React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CarouselUI = ({ children }: any) => <div style={{ width: '100%', height: '100vh' }}>{children}</div>;

const Carousel = makeCarousel(CarouselUI);

const Slider: React.FC = () => {
  return (
    <Carousel defaultWait={3000}>
      <Slide right={true}>
        <img src="/myPhysio/img_remedy.jpg" style={{ width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <h1>Slide 1</h1>
          <p>Slide Description</p>
        </div>
      </Slide>
      <Slide right={true}>
        <img src="/myPhysio/img_foot.jpg" style={{ width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <h1>Slide 2</h1>
          <p>Slide Description</p>
        </div>
      </Slide>
    </Carousel>
  );
};

export default Slider;
