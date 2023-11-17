const TestimonialCustomer = ({photoPath, description}) => {
    return (
        <div className="gtt-customer-card">
          <div className="gtt-customer-header" style={{backgroundImage:"url('icons/quotes-blue.svg')"}}></div>
          <div className="gtt-customer-description">
            &quot;{description}&quot;
          </div>
          <div className="gtt-customer-footer">
            <div className="gtt-customer-photo" style={{backgroundImage:"url('"+photoPath+"')"}}></div>
          </div>
        </div>
    )
}

export default TestimonialCustomer