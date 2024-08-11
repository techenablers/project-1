import React from 'react'

function AppointmentModal() {
  return (
    <div
    className="modal fade"
    id="appointmentModal"
    tabIndex="-1"
    aria-labelledby="appointmentModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="appointmentModalLabel">
            Book Your Appointment
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          {/* Modal body content */}
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Appointment Date
              </label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">
                Appointment Time
              </label>
              <input type="time" className="form-control" id="time" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AppointmentModal