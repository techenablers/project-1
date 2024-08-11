import React from "react";
import opd from '../assets/opd.jpeg';


function Opd() {
  return (
    <div style={{margin:'20px'}}>
 <img src={opd} className="d-block w-100" alt="Slide 1" />

      <p style={{marginTop:'20px'}} >
        The emergency department at Manipal Hospitals has a team of
        multidisciplinary doctors, nurses trained in critical care and
        emergency, and specialists who are available around the clock. Once the
        patient is admitted, a triage of nurses examines and allot to a zone
        depending on the severity of the condition. Patients with
        life-threatening and time-critical conditions like heart attack, stroke
        and major accidents are immediately attended by a doctor and managed in
        a separate dedicated zone called the Resuscitation Bay. The patient is
        directly shifted to this bay without any delay where a team of expert
        doctors and nurses immediately assess and start interventions to
        stabilize the patient. Using state-of-the-art diagnostic equipment,
        Manipal Hospitals is quickly able to scan the body for internal injuries
        and start the right course of treatment for better care and recovery.{" "}
      </p>

      <p>Proceed to Out Patient Registration Counter 1 for Males or No. 2 for Females or No. 3 for Disabled/ Senior Citizens and register your name. Pay registration fee.
Carry the OP Slip to the concerned Out Patient Department and kindly wait for your turn for consultation.
Preserve your OPD Slip safely because you are required to produce this on your subsequent visits.</p>
    </div>
  );
}

export default Opd;
