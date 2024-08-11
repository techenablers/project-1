import React from 'react'
import d from '../assets/d.jpeg';

function Surgeons() {



  return (
     <div className="card m-3 ">
     <div className="mt-4 ">
          <div className="row g-0">
        {/* Image on the left */}
        <div className="col-md-4">
          <img
            src={d}
            className="img-fluid rounded-start" 
            alt="doctor"
          />
        </div>
        
        {/* Information on the right */}
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              This is some information about the card. It can include text, links, or any other content. You can customize this section with additional details.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <button className='btn btn-outline-secondary ms-lg-auto my-2 my-lg-0'>Book consultent</button>
          </div>
         
        </div>
      </div>
      </div>

    </div>
  )
}

export default Surgeons