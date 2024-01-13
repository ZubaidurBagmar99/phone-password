import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="container bg-body-tertiary mt-4 p-5">
      <h1 className="text-center fw-bold ">Connect With Us</h1>
      <p className="text-center ">
        Follow us on social media to stay up to date with the latest news and
        updates.
      </p>
      <div className="d-flex gap-4 justify-content-center mt-5 ">
        <div className="media align-self-center shadow">
          <p className="text-primary">
            <FontAwesomeIcon icon={faFacebookF} />
          </p>
        </div>
        <div className="media align-self-center shadow">
          <p className="text-primary">
            <FontAwesomeIcon icon={faTwitter} />
          </p>
        </div>
        <div className="media align-self-center shadow">
          <p className="text-danger">
            <FontAwesomeIcon icon={faInstagram} />
          </p>
        </div>
        <div className="media align-self-center shadow">
          <p className="text-danger">
            <FontAwesomeIcon icon={faYoutube} />
          </p>
        </div>
        <div className="media align-self-center shadow">
          <p className="text-primary ">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default SocialMedia;
