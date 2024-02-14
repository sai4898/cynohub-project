
import React, { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import firebaseApp from './firebase';
import "react-phone-input-2/lib/style.css";


function GuidanceSessionForm() {
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    otp: '',
    isVerified: false,
    occupation: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // RecaptchaVerifier........

  const configureCaptch = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        onSignInSubmit();
      },
      defaultCountry: 'IN'
    });
  }

  // Firebase.......

  const onSignInSubmit = (e) => {
    e.preventDefault()
    configureCaptch()
    const phoneNumber = "+91" + formData.whatsappNumber;
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log('otp sent')
      }).catch((error) => {
      });
  }

  const generateOTP = (length) => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };

  const handleVerify = () => {
    const otp = generateOTP(6); 
    setFormData(prevState => ({
      ...prevState,
      otp,
      isVerified: true
    }));
    alert(`OTP sent to your phone number: ${otp}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.whatsappNumber || !formData.otp || !formData.occupation) {
      setFormError('Please fill in all  fields required');
      return;
    }
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      whatsappNumber: '',
      otp: '',
      isVerified: false,
      occupation: ''
    });
    setFormError('');
  };


  return (
    <><div className={`container mt-d reva form-container ${formSubmitted ? 'hidden' : ''}`}>
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-8">
          <div className="">
            <div className="">
              <h2 className="text-center mt-4">
                <h4 style={{ fontSize: '25px' }}>Book a <span style={{ color: 'orange' }}>Free Guidance Session</span> With Our Experts</h4>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input type="text" className="form-control" placeholder='Full Name' id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input type="email" className="form-control" placeholder='Email' id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div id='sign-in-button'></div>

                <div className='otp'>
                  <div className="form-group">
                    <label htmlFor="whatsappNumber">Whatsapp Number*</label>
                    <input type="number" className="form-control" placeholder='Number' id="whatsappNumber" name="whatsappNumber" pattern="[0-9]{10}" value={formData.whatsappNumber} onChange={handleChange} />
                  </div>

                  {!formData.isVerified && (
                    <div className="form-group">
                      <button type="button" className="btn btn-primary" onClick={handleVerify}>Verify OTP</button>
                    </div>
                  )}
                </div>

                {formData.isVerified && (
                  <div className="form-group">
                    <label htmlFor="otp">Enter OTP*</label>
                    <input type="text" className="form-control" placeholder='OTP' id="otp" name="otp" value={formData.otp} onChange={handleChange} />
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="occupation">Occupation*</label>
                  <select className="form-control" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange}>
                    <option value="">Select Occupation</option>
                    <option value="student">Student</option>
                    <option value="working">Working Professional</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success w-100 m-2">Submit</button>
                {formError && <div className="text-danger" style={{ fontSize: '20px' }}>{formError}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={`container mt-d submittedform form-container ${formSubmitted ? '' : 'hidden'}`}>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-8">
            <div className={`text-center mt-4 thank-you-container ${formSubmitted ? 'visible' : ''}`}>
              <h4>Thank you for submitting the form!</h4>
             
            </div>
          </div>
        </div>
      </div></>
  );
}

export default GuidanceSessionForm;
