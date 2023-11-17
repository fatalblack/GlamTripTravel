import React from "react";

const Places = () => {
  return (
    <div className="gtt-place-container">
        <div className="gtt-place-card" style={{backgroundImage: "url('places/place-ciudad-cordoba.jpg')"}}>
            <div className="gtt-place-name">
                Ciudad de <br/> C&oacute;rdoba
            </div>
        </div>
        <div className="gtt-place-card" style={{backgroundImage: "url('places/place-villa-carlos-paz.jpg')"}}>
            <div className="gtt-place-name">
                Villa <br/> Carlos Paz
            </div>
        </div>
        <div className="gtt-place-card" style={{backgroundImage: "url('places/place-la-cumbrecita.jpg')"}}>
            <div className="gtt-place-name">
                La <br/> Cumbrecita
            </div>
        </div>
        <div className="gtt-place-card" style={{backgroundImage: "url('places/place-villa-general-belgrano.jpg')"}}>
            <div className="gtt-place-name">
                Villa General <br/> Belgrano
            </div>
        </div>
        <div className="gtt-place-card" style={{backgroundImage: "url('places/place-laguna-mar-chiquita.jpg')"}}>
            <div className="gtt-place-name">
                Laguna Mar <br/> Chiquita
            </div>
        </div>
        <div className="gtt-place-title">estos y muchos otros lugares te esperan</div>
    </div>
  );
};

export default Places;
