import vision from "../../assets/picture/vission.jpg";
import mission from "../../assets/picture/mission.jpg";
import value from "../../assets/picture/value.jpg";

const AboutUs = () => {
  return (
    <div className="container mt-4 ">
      <h1 className="text-center mt-2">About US</h1>
      <p className="text-center ">
        Our company has been providing quality services since 1999. We pride
        ourselves on creating value for our customers and communities.
      </p>
      <div className="d-flex justify-content-center mt-5   gap-4 ">
        <div className="card  " style={{ width: "18rem" }}>
          <img src={vision} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Our Vision</h5>
            <p className="card-text">
              To be the leading provider in our industry, known for our
              innovation, expertise, and integrity.
            </p>
          </div>
        </div>
        <div className="card  " style={{ width: "18rem" }}>
          <img src={mission} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Our Mission</h5>
            <p className="card-text">
            To deliver exceptional service and solutions that enhance the value of every customer interaction.
            </p>
          </div>
        </div>
        <div className="card  " style={{ width: "18rem" }}>
          <img src={value} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Our Values</h5>
            <p className="card-text">
            Commitment to excellence, customer focus, integrity, and teamwork are the cornerstones of our success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
