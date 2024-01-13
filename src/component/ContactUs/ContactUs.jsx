import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {  faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";


const ContactUs = () => {
  return (
    <div className="w-25  mx-auto mt-4 bg-body-tertiary p-2 rounded">
      <h1 className="text-center fw-bold">Contact Us</h1>
      <p className="text-center ">We&apos;re here to help and answer any question you might have. We look forward to hearing from you.</p>
      <h5 className="fw-medium">Get in Touch</h5>
      <div>
        <form>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Email"
            />
           
          </div>
          
          <div className="mb-3">
          <label >Message</label>
            <textarea className="form-control" placeholder="Your Message" id="floatingTextarea"></textarea>
             
        </div>
          <button type="submit" className="btn btn-primary w-100 ">
            Submit
          </button>
        </form>
      </div>
      <h5 className="fw-medium mt-2 ">Our Office</h5>
      <div >
        <div className="d-flex gap-3">
            <p><FontAwesomeIcon icon={faLocationDot} /></p>
            <p>123 Street, City, Country</p>
        </div>
        <div className="d-flex gap-3">
            <p><FontAwesomeIcon icon={faPhone} /></p>
            <p>+122 3456 000</p>
        </div>
        <div className="d-flex gap-3">
            <p><FontAwesomeIcon icon={faEnvelope} /></p>
            <p>support@example.com0</p>
        </div>
      </div>
      <h5 className="fw-medium mt-2 ">Follow Us</h5>
      <div className="d-flex gap-3 mt-3
      ">
        <p><FontAwesomeIcon icon={faFacebookF}/></p>
        <p><FontAwesomeIcon icon={faTwitter}/></p>
        <p><FontAwesomeIcon icon={faInstagram}/></p>
        <p><FontAwesomeIcon icon={faLinkedinIn}/></p>
      </div>
    </div>
  );
};

export default ContactUs;
