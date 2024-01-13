import mission from "../../assets/picture/mission.jpg";
const Blog = () => {
  return (
    <div className="container bg-body-tertiary mt-4 p-4">
      <h1 className="text-center fw-bold ">Our Blog</h1>
      <p className="text-center">
        Insights, stories, and thoughts from our team.
      </p>
      <div className="col-4 justify-content-center ">
        <div className="card  " style={{ width: "18rem" }}>
          <img src={mission} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Blog Post Titlen</h5>
            <p className="card-text">
              This is a short introduction to the blog post content that entices
              readers to continue reading.
            </p>
            <a href="#" className="text-decoration-none ">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
