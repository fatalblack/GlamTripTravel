import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCustomer from './TestimonialCustomer'

const Testimonials = () => {
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

  const customers = [
    { id:1, photoPath:"customers/mauricio-hernandez.jpg", customerName: "Mauricio Hernández", description: "En diciembre de 2022 tuve la oportunidad de visitar Córdoba por un fin de semana. Contraté el Servicio de Plan de Viaje de Glam Trip Travel Córdoba, quienes planearon para mí un recorrido temático por la ciudad de Córdoba. Estaba puntualmente interesado en las glorias del fútbol y básquet cordobés, visitar estadios y sedes de los clubes que conocía de Córdoba como Instituto, Talleres y Belgrano, además de Racing al que seguí de chico en tv de Uruguay cuando estuvo en primera división. De básquet, seguí a Atenas desde que jugaba en mi país. Quedé ampliamente satisfecho con el Servicio brindado, me diseñaron un recorrido personalizado y pude visitar en el poco tiempo que disponía los lugares que quería, si hubiera ido por mi cuenta no hubiera llegado a ver la cantidad que vi." },
    { id:2, photoPath:"customers/elida-plaza.jpg", customerName: "Elida Plaza", description: "Soy Elida, docente jubilada de La Pampa y viajera. En febrero de 2023 tuve la posibilidad de visitar la ciudad de Córdoba y contraté a Sil de Glam Trip Travel Córdoba para que me diseñe un recorrido temático relacionado a la literatura en la ciudad. Sin dudarlo, recomiendo este Servicio personalizado. Quedé gratamente sorprendida con el Plan que cubrió ampliamente mis expectativas. Pude recorrer librerías especializadas, cafés temáticos y acceder a información de primera mano de personajes cordobeses como Daniel Salzano. Si quieren ahorrar tiempo y hacer actividades interesantes, están en el lugar correcto!" },
    { id:3, photoPath:"customers/valeria-y-victoria.jpg", customerName: "Valeria y Victoria", description: "Somos un grupo de amigas amantes de vivir momentos, charlas de chicas, meriendas y after offices. Tenemos gustos variados pero complementarios y nos gusta compartir momentos de calidad.\r\nEn junio le pedimos a Sil de GlamTripTravel que nos organice un recorrido por la ciudad que incluya: una merienda en donde se pueda disfrutar la vista verde de la ciudad, degustación de comida japonesa y un after con cócteles que sean únicos.\r\nEl Plan cumplió con nuestras expectativas y pudimos hacer lo que queríamos y más, en una tarde-noche. Quedamos muy conformes con el Diseño Personalizado de nuestra tarde de chicas y charlas." },
    { id:4, photoPath:"customers/luli-y-juan.jpg", customerName: "Luli y Juan", description: "Un recorrido cervecero por Córdoba Capital\r\nViajamos por trabajo y visitamos la ciudad de Córdoba por 2 días en julio de este año.\r\nLe pedimos a GlamTripTravel que nos organice un recorrido para visitar cervecerías en la ciudad. Teníamos poco tiempo pero queríamos vivir la experiencia cervecera de la que tanto se habla.\r\nSil nos diseñó un recorrido único para vivir la experiencia de tomar birras en la vereda (justo el día que se festeja el IPA Craft Day), visitar una terraza cervecera en Güemes con gran variedad de las cervezas que nos gustan y descubrir un patio cervecero en un bar al estilo vikingo con irish music incluida!\r\nQuedamos muy satisfechos con nuestro Plan ya que descubrimos lugares únicos y pudimos probar rubias, rojas y negras artesanales. Recomendamos!!" },
    { id:5, photoPath:"customers/victoria-lovera.jpg", customerName: "Victoria Lovera", description: "Excelente Servicio! Se adapta a tus gustos muy bien, organizamos día de amigas y la pasamos fantástico. También para salir y conocer sola, unas opciones muy interesantes, voy a volver a contratar. Totalmente Recomendado." },
    { id:6, photoPath:"customers/selva.jpg", customerName: "Selva", description: "Le pedí me organizara un fin de semana para festejar un cumple en familia. Y no solo me buscó diferentes opciones de estadía sino me sugirió donde ir a comer y actividades que podía realizar, y que no podía dejar de hacer para que sea inolvidable. La súper recomiendo! Y la volvería a contactar para que me organice otro evento! Estuvo siempre pendiente de mis preferencias para organizar el itinerario." }
  ];

  return (
    <div id="Testimonials" className="gtt-section-container">
        <div className="gtt-section-title">
            Nuestros clientes
        </div>
        <div>
          <Carousel responsive={responsive} infinite={true}
            autoPlay={true} autoPlaySpeed={8000} ssr={true}
            itemClass="gtt-custom-carousel-item">
            {customers.map((customer) => {
              return(
                <TestimonialCustomer key={"customer-"+customer.id} photoPath={customer.photoPath} customerName={customer.customerName} description={customer.description} />
              );
            })}
          </Carousel>
        </div>
    </div>
  );
};

export default Testimonials;