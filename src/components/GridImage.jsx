import Carousel from 'react-bootstrap/Carousel';

function GridImage() {
  return (
    <Carousel className='rounded-3xl text-black' variant='dark' pause='hover' interval={2800} indicators={false}>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/IMG-20230529-WA0015.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-center text-2xl font-bold">Welcome!</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/IMG-20230529-WA0016.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/images/IMG-20230529-WA0017.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0018.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0019.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0020.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0021.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0022.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0023.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0024.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0024.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0025.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="/public/images/IMG-20230529-WA0026.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}

export default GridImage;