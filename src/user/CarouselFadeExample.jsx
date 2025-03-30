import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../images/ExampleCarouselImage1.png';
import ExampleCarouselImage2 from '../images/ExampleCarouselImage2.png';
import ExampleCarouselImage3 from '../images/ExampleCarouselImage3.png';

function CarouselFadeExample() {
  return (
    <Carousel fade style={{ width: '100vw', height: '80vh' }}>
      <Carousel.Item >
     
        <img className="d-block w-full h-full object-cover" src={ExampleCarouselImage1} alt="First slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
         
        <img className="d-block w-full h-full object-cover" src={ExampleCarouselImage2} alt="Second slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img className="d-block w-full h-full object-cover" src={ExampleCarouselImage3} alt="Third slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;