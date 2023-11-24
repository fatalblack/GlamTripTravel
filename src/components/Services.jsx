import { Col, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1220 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1220, min: 820 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 820, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const slides = [
    {id: 1, photoPath: "services/carousel1.png"},
    {id: 2, photoPath: "services/carousel2.png"},
    {id: 3, photoPath: "services/carousel3.png"},
    {id: 4, photoPath: "services/carousel4.png"},
  ];
  

  return (
    <>
    <div id="Services" className="gtt-section-container">
      <div className="gtt-section-title">Nuestros servicios</div>
        <Row className="fullWidth">
          <Col xs="12" className="gtt-services-description">¿Viajas a la ciudad de Córdoba y no sabes por dónde empezar?
          <br />
          ¿Sin tiempo para armar tu itinerario?
          <br />
          ¿Buscas sugerencias a la medida de tus necesidades?
          <br />
          ¡Contáctame y déjame ayudarte a organizar la estadía perfecta en
          Córdoba! Mis conocimientos y años de experiencia asesorando viajeros te
          ayudarán a disfrutar la ciudad, ahorrar tiempo y dinero y llegar a
          rincones que sólo los lugareños conocen, lejos de las trampas
          turísticas.
          </Col>
        </Row>
    </div>
    <div className="gtt-section-container noMargin">      
      <Row className="fullWidth noMargin">
        <Col xs="12" md="6" className="gtt-services-image" style={{backgroundImage: "url('services/diseno-plan-viajes.jpg')"}}>
          <div className="gtt-services-tape-a" style={{backgroundImage: "url('stickers/tape-1.png')"}}></div>
        </Col>
        <Col xs="12" md="6" className="gtt-services-box-description">
          <div className="gtt-services-tape-b" style={{backgroundImage: "url('stickers/tape-2.png')"}}></div>
          <div className="gtt-services-tape-c" style={{backgroundImage: "url('stickers/tape-3.png')"}}></div>
          <div className="gtt-services-box-title">Diseño de plan de viajes</div>
          <div>
            <strong>Qué incluye el servicio:</strong>
            <br />
            <strong>VIDEOLLAMADA:</strong> 30 minutos durante los cuales respondo a tus preguntas.
            <br />
            <strong>GUÍA PLAN DE VIAJE</strong> (descargable en formato PDF) con:
            <br />
            - Itinerario a medida con sugerencias personalizadas.
            <br />
            - Paseos para que descubras Córdoba a tu ritmo (mapas con paradas y puntos de interés, tips y sugerencias de lugares para comer, beber y hacer compras en cada zona).
            <br />
            - Recomendaciones de zonas, atracciones famosas, actividades y lugares únicos.
            <br />
            <br />
            <strong>GUIA ESENCIAL DE CORDOBA:</strong> (descargable en formato pdf) con: tips de transporte, transporte desde el aeropuerto y mejores apps para explorar Córdoba.
            <br />
            <strong>Mis recomendaciones incluyen:</strong>
            <br />
            - Zonas adecuadas para hospedarte según tu estilo de vida y tipo de visita.
            <br />
            - Los mejores cafés, restaurantes, mercados de comida, cocktail bars y rooftop para disfrutar de experiencias gastronómicas inolvidables.
            <br />
            - Rincones escondidos: jardines, callejones, patios y terrazas con vistas panorámicas.
            <br />
            - Lugares únicos: edificios históricos, galerías, museos y tiendas fuera de lo convencional.
            <br />
            - Qué ver y hacer - y qué evitar (atracciones, museos, edificios históricos y lugares menos conocidos).
            <br />
            - Consejos para recorrer la ciudad.
            <br />
            <br />
            Luego de una breve videollamada, recibirás un itinerario a medida de tus intereses, agenda y presupuesto que te ayudará a optimizar tu estadía y descubrir Córdoba de una forma única.
          </div>
        </Col>
      </Row>
      <Row className="fullWidth noMargin">
        <Col xs={{order: 2, span: 12}} md={{order: 1, span: 6}} className="gtt-services-box-description">
          <div className="gtt-services-tape-d" style={{backgroundImage: "url('stickers/tape-4.png')"}}></div>
          <div className="gtt-services-box-title">Diseño de MicroRecorridos</div>
          <div>
            <strong>Qué incluye el servicio:</strong>
            <br />
            <strong>DISEÑO DEL MICRORECORRIDO</strong> (descargable en formato PDF) con:
            <br />
            - Itinerario cerrado  con 3 sugerencias de actividades a realizar.
            <br />
            - Se puede elegir entre las siguientes opciones: Córdoba al aire libre, De After por la Docta, Tardes de Invierno en la Docta, Tardes de Primavera en la Docta.
          </div>
        </Col>
        <Col xs={{order: 1, span: 12}} md={{order: 2, span: 6}} className="gtt-services-carousel">
          <Carousel responsive={responsive} infinite={true}
            autoPlay={true} autoPlaySpeed={8000} ssr={true}
            itemClass="">
            {slides.map((slide, index) => {
              return(
                <img key={"slide-service-"+index} src={slide.photoPath} className="gtt-services-carousel-image" draggable="false"/>
              );
            })}
          </Carousel>
        </Col>
      </Row>
      <Row className="fullWidth noMargin">
        <Col xs="12" md="6" className="gtt-services-image" style={{backgroundImage: "url('services/freetour.jpg')"}}>
        </Col>
        <Col xs="12" md="6" className="gtt-services-box-description">
          <div className="gtt-services-tape-e" style={{backgroundImage: "url('stickers/tape-5.png')"}}></div>
          <div className="gtt-services-box-title" translate="no">FreeTour</div>
          <div>
            Te invitamos a descubrir los Secretos Artísticos de Córdoba en Nuestro Free tour de Arte Urbano y a sumergirte en las vibrantes calles de la ciudad y sus expresiones creativas que adorna cada rincón. Desde murales coloridos hasta obras provocativas, nuestro recorrido gratuito te llevara por un viaje único a través del Arte Urbano de Córdoba.
            <br />
            Unite a nosotros para explorar la ciudad de una manera completamente nueva y descubrir la creatividad que late en sus paredes.
            <br />
            <a target="_blank" rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSftYfMek6fYKR6u6OKCgYIW_Qj23TjLO0GgRC2rK2WVd7Lt_w/viewform?usp=pp_url"
            className="gtt-service-button">¡Inscríbete aquí!</a>
          </div>
          <div className="gtt-services-tape-f" style={{backgroundImage: "url('stickers/tape-6.png')"}}></div>
          <div className="gtt-services-tape-g" style={{backgroundImage: "url('stickers/tape-7.png')"}}></div>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default Services;
