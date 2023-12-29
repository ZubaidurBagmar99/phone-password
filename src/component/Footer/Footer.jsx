// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className='mb-0 '>
      {/* <Link to="/about-us">About US </Link> */}
      <ul className="nav nav-tabs " >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            About Us
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Contact Us
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="gorjon-bd-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="gorjon-bd"
            aria-selected="false"
          >
            GORJON BD Blogs
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="payment-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="payment"
            aria-selected="false"
          >
            Payment Method
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="social-media-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="social-media"
            aria-selected="false"
          >
            Social Media
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="map-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="map"
            aria-selected="false"
          >
            See Map
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="terms-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="terms"
            aria-selected="false"
          >
            Terms & Condition 
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="privacy-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="privacy"
            aria-selected="false"
          >
            Privacy Policy
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="shipping-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="shipping"
            aria-selected="false"
          >
            Shipping policy
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="refund-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="refund"
            aria-selected="false"
          >
            Refund Policy
          </button>
        </li>
      </ul>
      {/* content */}
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
         
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          ...
        </div>
      </div>
    </footer>
  );
};

export default Footer;
