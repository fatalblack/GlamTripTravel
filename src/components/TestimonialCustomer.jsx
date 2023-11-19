const TestimonialCustomer = ({photoPath, customerName, description}) => {
    return (
        <div className="gtt-customer-card-big-size">
          <div className="gtt-customer-photo" style={{backgroundImage:"url('"+photoPath+"')"}}></div>
          <div className="gtt-customer-description-big-size">
            &quot;{description}&quot;
          </div>
          <div className="gtt-customer-name">
            {customerName}
          </div>
          <div className="gtt-customer-footer">
            <div className="gtt-customer-quote" style={{backgroundImage:"url('icons/quotes-orange.svg')"}}></div>
          </div>
        </div>
    )
}

export default TestimonialCustomer