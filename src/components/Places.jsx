const Places = () => {

    const places = [
        {title: "", image:"places/foto-chica-1.jpg"},
        {title: "", image:"places/foto-chica-2.jpg"},
        {title: "", image:"places/foto-chica-3.jpg"},
        {title: "", image:"places/foto-chica-4.jpg"},
        {title: "", image:"places/foto-chica-5.jpg"}
    ];

    return (
        <div className="gtt-place-container">
            {
                places.map((place, index) => {
                    return(
                        <div key={"place-"+index} className="gtt-place-card" style={{backgroundImage: "url('"+place.image+"')"}}>
                            <div className="gtt-place-name">
                                {place.title}
                            </div>
                        </div>
                        )
                })
            }
            <div className="gtt-place-title">¡Estas y muchas experiencias más te esperan…Que comiencen las emocionantes aventuras!</div>
            <div className="gtt-place-down">
                <img src="stickers/down.svg"></img>
            </div>
        </div>
    );
};

export default Places;
