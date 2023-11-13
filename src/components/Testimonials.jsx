import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCustomer from './TestimonialCustomer'

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1220, min: 820 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 820, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const customers = [
    { id:1, photoPath:"customers/photo-test-1.jpg", description:"Bienvenido a una experiencia única de viaje por Córdoba, Argentina. Nuestros itinerarios personalizados te permiten descubrir esta ciudad de una manera auténtica." },
    { id:2, photoPath:"customers/photo-test-2.jpg", description:"Bienvenido a una experiencia única de viaje por Córdoba, Argentina. Nuestros itinerarios personalizados te permiten descubrir esta ciudad de una manera auténtica." },
    { id:3, photoPath:"customers/photo-test-3.jpg", description:"Bienvenido a una experiencia única de viaje por Córdoba, Argentina. Nuestros itinerarios personalizados te permiten descubrir esta ciudad de una manera auténtica." },
    { id:4, photoPath:"customers/photo-test-4.jpg", description:"Bienvenido a una experiencia única de viaje por Córdoba, Argentina. Nuestros itinerarios personalizados te permiten descubrir esta ciudad de una manera auténtica." },
    { id:5, photoPath:"customers/photo-test-5.jpg", description:"Bienvenido a una experiencia única de viaje por Córdoba, Argentina. Nuestros itinerarios personalizados te permiten descubrir esta ciudad de una manera auténtica." },
    { id:6, photoPath:"customers/photo-test-6.jpg", description:"Bienvenido a una experiencia única de viaje por Córdoba, Argentina. Nuestros itinerarios personalizados te permiten descubrir esta ciudad de una manera auténtica." }
  ];

  return (
    <div id="Testimonials" className="gtt-section-container">
        <div className="gtt-section-title">
            Nuestros clientes
        </div>
        <div>
          <Carousel responsive={responsive} infinite={true}
            autoPlay={true} autoPlaySpeed={4000} ssr={true}
            itemClass="gtt-custom-carousel-item">
            {customers.map((customer) => {
              return(
                <TestimonialCustomer key={"customer-"+customer.id} photoPath={customer.photoPath} description={customer.description} />
              );
            })}
          </Carousel>
        </div>
    </div>
  );
};

export default Testimonials;