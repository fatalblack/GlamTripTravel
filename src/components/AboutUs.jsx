const AboutUs = () => {
  return (
    <div id="AboutUs" className="gtt-section-container">
        <div className="gtt-section-title">
            Sobre nosotros
        </div>
        <div>
            <div className="gtt-aboutus-tape-a" style={{backgroundImage: "url('stickers/about-us-tape-1.png')"}}></div>
            <div className="gtt-aboutus-photo-container">
              <div className="gtt-aboutus-tape-b" style={{backgroundImage: "url('stickers/about-us-tape-2.png')"}}></div>
              <img src="aboutus/silvia.jpg" className="gtt-aboutus-photo"></img>
            </div>
            
            <div className="gtt-aboutus-description">
              <strong>SILVIA ESTEBAN</strong>
              <br />
              TRAVEL PLANNER - VIAJERA EXPERIMENTADA
              <br />
              <br />
              Soy Sil, tu anfitriona en la creación de vivencias únicas en la ciudad de Córdoba.
              <br />
              Fundadora de GlamTripTravel - Experiencias Personalizadas.
              <br />
              Con una pasión inquebrantable por los viajes, he tenido la oportunidad de explorar no solo mí amada Córdoba sino también recorrer cada rincón de mi país, así como países vecinos y destinos en Europa y Estados Unidos.
              <br />
              Cuando viajo disfruto recorriendo lugares con personas locales, lo que me ha permitido descubrir sitios auténticos y especiales que hacen que mis viajes sean inolvidables.
              <br />
              ¡Eso es lo que te ofrezco al diseñar tu experiencia de viaje personalizada!
            </div>
            <div className="gtt-aboutus-tape-c" style={{backgroundImage: "url('stickers/about-us-tape-3.png')"}}></div>
            <div className="gtt-aboutus-tape-d" style={{backgroundImage: "url('stickers/about-us-tape-4.png')"}}></div>
        </div>
    </div>
  );
};

export default AboutUs;