import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

// import { Button, Card, Col, Row } from "react-bootstrap";
// import SideNav from "../SideNav/SideNav";
// import { useLoaderData } from "react-router-dom";
import productImg from '../../assets/picture/productImg.jpg';


const Home = () => {
    // const products = useLoaderData();
//   const { product_name, details, image } = products;
  return (
    <>
    
    <Swiper
        spaceBetween={60}
        pagination={{
          dynamicBullets: true,
        }}
        
       
        className="mySwiper py-5"
      >
        <SwiperSlide>
        <div className="d-flex justify-content-between container mt-4 ">
      <div className='mt-5 '>
        <h1 className='fw-bolder  '>CLASSIC SHOE <br/> POLISHER</h1>
        <button type="button" className="btn btn-danger mt-4">Explore</button>
      </div>
      <div>
        <img src={productImg} className='mt-2' alt="" />
      </div>
      
    </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex justify-content-between container mt-4 ">
            <div className='mt-5 '>
              <h1 className='fw-bolder  '>CLASSIC SHOE <br/> POLISHER</h1>
              <button type="button" className="btn btn-danger mt-4">Explore</button>
            </div>
            <div>
              <img src={productImg} className='mt-2' alt="" />
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="d-flex justify-content-between container mt-4 ">
            <div className='mt-5 '>
              <h1 className='fw-bolder  '>CLASSIC SHOE <br/> POLISHER</h1>
              <button type="button" className="btn btn-danger mt-4">Explore</button>
            </div>
            <div>
              <img src={productImg} className='mt-2' alt="" />
            </div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;



{/* <SideNav></SideNav>
      <Row xs={1} md={2} lg={6}>
        {products.map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.product_name}</Card.Title>
                <Card.Text>{product.details}</Card.Text>
                <Button variant="danger">Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}