import { Spinner } from "react-bootstrap"

const Loader = ({show}) => {
    return (
        show ?
        (
            <div className="gtt-loader-full-size">
                <div className="gtt-loader-spinner">
                    <Spinner animation="border" variant="light" />
                </div>
            </div>
        ) : 
        (<></>)
    )
}

export default Loader