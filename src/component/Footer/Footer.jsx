// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='mb-0 '>
      {/* <Link to="/about-us">About US </Link> */}
      <ul className="nav nav-tabs " >
        
          <Link
          to="/about-us"
          className="nav-link active"
          >About US </Link>
            
        <li className="nav-item" role="presentation">
          <Link
          to="/contact-us"
          className="nav-link"
          >Contact Us </Link>
            
        </li>
        <li className="nav-item" role="presentation">
          <Link
          to="/blog"
          className="nav-link"
          >GORJON BD Blogs </Link>
            
        </li>
        <li className="nav-item" role="presentation">
          <Link
          to="/payment"
          className="nav-link"
          >Payment Method
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
          to="/social-media"
          className="nav-link"
          >Social Media
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
          to="/site-map"
          className="nav-link"
          >Site Map
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
          to="/terms-condition"
          className="nav-link"
          >Terms & Conditions
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
          to="/privacy-policy"
          className="nav-link"
          >Privacy Policy
          </Link>
        </li>
        <li className="nav-item" role="presentation">
        <Link
          to="/shipping-policy"
          className="nav-link"
          >Shipping Policy
          </Link>
        </li>
        <li className="nav-item" role="presentation">
        <Link
          to="/refund-policy"
          className="nav-link"
          >Refund Policy
          </Link>
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
