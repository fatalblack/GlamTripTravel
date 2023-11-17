const TestimonialCustomer = ({photoPath, description}) => {
    return (
        <div className="gtt-customer-card">
          <div className="gtt-customer-photo" style={{backgroundImage:"url('"+photoPath+"')"}}></div>
          <div className="gtt-customer-description">
            &quot;{description}&quot;
          </div>
          <div className="gtt-customer-footer">
            <div className="gtt-customer-quote" style={{backgroundImage:"url('icons/quotes-orange.svg')"}}></div>
          </div>
        </div>
    )
}

export default TestimonialCustomer