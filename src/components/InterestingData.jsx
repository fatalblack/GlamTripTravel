import { Col, Row } from "react-bootstrap";

const InterestingData = () => {
    const data = [
        {
            "number": "795000",
            "description": "Lectores en TripAdvisor"
        },
        {
            "number": "20 %",
            "description": "Del mundo recorrido (526000 km)"
        },
        {
            "number": "+5 años",
            "description": "Diseñando planes de viaje"
        },
        {
            "number": "Level 6",
            "description": "Local Guide"
        }
    ];

    return (
        <div id="InterestingData" className="gtt-section-container">
            <div className="gtt-section-title">
                Datos interesantes
            </div>
            <Row>
                <Col xs="12" className="gtt-interesting-data-container">
                {
                    data.map((item, index) => {
                        return(
                            <div key={"interesting-"+index} className="gtt-interesting-data-card">
                                <div key={"interesting-n-"+index} className="gtt-interesting-data-number-big">{item.number}</div>
                                <div key={"interesting-d-"+index} className="gtt-interesting-data-description-big">{item.description}</div>
                            </div>
                        );
                    })
                }
                </Col>
            </Row>
        </div>
    );
};

export default InterestingData;