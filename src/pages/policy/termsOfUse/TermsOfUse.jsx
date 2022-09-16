import React from 'react'
import './TermsOfUse.css'
import itflogo from '../../../assets/itf_log.png';
import { Link } from 'react-router-dom';

function TermsOfUse() {
  return (
    <div>
      <div>
        <div className='abouthead'>
        <div className='mylogo'>
                <Link to='/' className='links'>
                    <img src={itflogo} alt="itflogo" style={{width:'90%', height:'80%', padding:'5px 5px'}}/>
                </Link>
        </div>
        </div>
        <div className='terms'>
          <h1>TERMS OF USE</h1>
          <p>Our Terms of use was last updated on the 14th of September, 2022.
Your access to and use of the Service is also conditioned on your acceptance of and compliance with these Terms of Use.
          </p>
          <p>Eduspot runs a Non-Discrimination Policy. It does not discriminate in admissions, employment, or in any of its educational programs or activities on the basis of race, color, national or ethnic origin, ancestry, age, religion or religious creed, disability or handicap, sex or gender.
          </p>
          <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with these Terms of Use. These terms of Use apply to all visitors, users and others who access or use the Service.
          </p>
          <p>By accessing or using the service you agree to be bound by these Terms of Use. If you disagree with any part of these Terms of Use then you may not access the Service.
          </p>
          <p>As a condition for using the Service(s), you agree that you have read, understood and accepted Eduspot's Terms of Use, which may be updated from time to time. After notice of a change to the privacy policy, continued use of the website(s) will be deemed acceptance of the policy.
          </p>
          <p>To access the Eduspot e-learning, you must attest that you have read and agree to the terms and conditions contained in this Eduspot Terms of Use. The term “e-learning” includes the outlines, Web pages, courses and all associated materials. Read this Eduspot Terms of Use carefully.
          </p>
          <p>All Eduspot e-learning outlines and materials, along with references used in or related to the e-learning, are the property of the ITF or of third parties and used under permission granted to the ITF and may only be used in the manner detailed in this Eduspot Terms of Use.
          </p>
          <p>We reserve the right to modify these Terms of Use at any time and in our sole discretion without prior notice.
          </p>
      </div>
      </div>
    </div>
  )
}

export default TermsOfUse