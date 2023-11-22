import React from "react";
import "../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="Services" className="gtt-section-container">
      <div className="gtt-section-title">Nuestros servicios</div>
      <p className="texto-services-2">
        ¿Viajas a la ciudad de Córdoba y no sabes por dónde empezar?
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
      </p>
      <div>
        <div className="contenedor-services">
          <img
            className="imagen-services "
            src="../public/places/diseño1.jpg"
            alt="picture-travel"
          />
          <div className="texto-services">
            <h2 className="gtt-form-title">PLANES CERRADOS</h2>
            <p>
              Qué incluye el servicio:
              <br />
              VIDEOLLAMADA: 30 minutos durante los cuales respondo a tus
              preguntas. GUÍA PLAN DE VIAJE (descargable en formato PDF) con:
              Itinerario a medida con sugerencias personalizadas. Paseos para
              que descubras Córdoba a tu ritmo (mapas con paradas y puntos de
              interés, tips y sugerencias de lugares para comer, beber y hacer
              compras en cada zona) Recomendaciones de zonas, atracciones
              famosas, actividades y lugares únicos.
              <br />
              GUIA ESENCIAL DE CORDOBA: (descargable en formato pdf) con: tips
              de transporte, transporte desde el aeropuerto y mejores apps para
              explorar Córdoba. Mis recomendaciones incluyen: Zonas adecuadas
              para hospedarte según tu estilo de vida y tipo de visita. Los
              mejores cafés, restaurantes, mercados de comida, cocktail bars y
              rooftop para disfrutar de experiencias gastronómicas inolvidables.
              Rincones escondidos: jardines, callejones, patios y terrazas con
              vistas panorámicas. Lugares únicos: edificios históricos,
              galerías, museos y tiendas fuera de lo convencional. Qué ver y
              hacer – y qué evitar (atracciones, museos, edificios históricos y
              lugares menos conocidos) Consejos para recorrer la ciudad. Luego
              de una breve videollamada, recibirás un itinerario a medida de tus
              intereses, agenda y presupuesto que te ayudará a optimizar tu
              estadía y descubrir Córdoba de una forma única.
            </p>
            <button className="gtt-button-submit btn btn-primary">
              <a
                href="#ContactUs"
                style={{ textDecoration: "none", color: "white" }}
              >
                Saber más
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* aca termina el primero */}
      <div className="contenedor-services">
        <div className="texto-services">
          <h2 className="gtt-form-title">DISEÑO DE MICRO-RECORRIDOS</h2>
          <p>
            Qué incluye el servicio:
            <br />
            (descargable en formato PDF) con: Itinerario cerrado con 3
            sugerencias de actividades a realizar. Se puede elegir entre las
            siguientes opciones: Córdoba al aire libre, De After por la Docta,
            Tardes de Invierno en la Docta, Tardes de Primavera en la Docta.
          </p>
          <button className="gtt-button-submit btn btn-primary">
            <a
              href="#ContactUs"
              style={{ textDecoration: "none", color: "white" }}
            >
              Saber más
            </a>
          </button>
        </div>
        <Slider {...carouselSettings}>
          <div>
            <img
              className=""
              src="../public/places/carrousel1.png"
              alt="picture-carrousel"
            />
          </div>
          {/* aca el segundo, si añado mas divs, se rompe REVISAR*/}
        </Slider>
      </div>

      {/* ACA ES DONDE NECESITO EL OTRO DIV  */}

      <div>
        <div className="contenedor-services">
          <img
            className="imagen-services-2 "
            src="../public/places/freetour.jpg"
            alt="picture-travel"
          />
          <div className="texto-services">
            <h2 className="gtt-form-title">PLANES CERRADOS</h2>
            <p>
              Qué incluye el servicio: Te invitamos a descubrir los Secretos
              Artísticos de Córdoba en Nuestro Free tour de Arte Urbano y a
              sumergirte en las vibrantes calles de la ciudad y sus expresiones
              creativas que adorna cada rincón. Desde murales coloridos hasta
              obras provocativas, nuestro recorrido gratuito te llevara por un
              viaje único a través del Arte Urbano de Córdoba.
              <br />
              Únite a nosotros para explorar la ciudad de una manera
              completamente nueva y descubrir la creatividad que late en sus
              paredes. Inscríbete aquí!
            </p>
            <button className="gtt-button-submit btn btn-primary">
              <a
                href="#ContactUs"
                style={{ textDecoration: "none", color: "white" }}
              >
                Saber más
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
