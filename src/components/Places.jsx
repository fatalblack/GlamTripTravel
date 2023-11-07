import React from "react";

const Places = () => {
  return (
    <div className="gtt-place-container">
        <div className="gtt-place-card gtt-place-ciudad-cordoba">
            <div className="gtt-place-name">
                Ciudad de <br/> C&oacute;rdoba
            </div>
        </div>
        <div className="gtt-place-card gtt-place-villa-carlos-paz">
            <div className="gtt-place-name">
                Villa <br/> Carlos Paz
            </div>
        </div>
        <div className="gtt-place-card gtt-place-la-cumbrecita">
            <div className="gtt-place-name">
                La <br/> Cumbrecita
            </div>
        </div>
        <div className="gtt-place-card gtt-place-villa-general-belgrano">
            <div className="gtt-place-name">
                Villa General <br/> Belgrano
            </div>
        </div>
        <div className="gtt-place-card gtt-place-laguna-mar-chiquita">
            <div className="gtt-place-name">
                Laguna Mar <br/> Chiquita
            </div>
        </div>
        <div className="gtt-place-title">estos y muchos otros lugares te esperan</div>
    </div>
  );
};

export default Places;
