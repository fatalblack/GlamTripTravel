import { Col, Row } from "react-bootstrap";

const InterestingData = () => {
    const data = [
        {
            "number": 9999,
            "description": "Algo 1"
        },
        {
            "number": 9999,
            "description": "Algo 2"
        },
        {
            "number": 9999,
            "description": "Algo 3"
        },
        {
            "number": 9999,
            "description": "Algo 4"
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
                                <div key={"interesting-n-"+index} className="gtt-interesting-data-number">{item.number}</div>
                                <div key={"interesting-d-"+index} className="gtt-interesting-data-description">{item.description}</div>
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