import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import img from '../../assets/picture/Untitled.jpg';
import './Details.css'
import ReactStarsRating from 'react-awesome-stars-rating';

const onChange = (value) => {
    console.log(`React Stars Rating value is ${value}`);
  };

const Details = ({ value }) => {
    
    return (
        <div>
            <div className='d-flex justify-content-center '>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1>Product Name</h1>
                    <div>
                        <p> <ReactStarsRating onChange={onChange} value={value}></ReactStarsRating></p>
                    </div>
                    <h3>Brand</h3>
                    <div className='d-flex gap-2 '>
                        <p className='red'></p>
                        <p className='blue'></p>
                        <p className='green'></p>
                    </div>
                    <div className='d-flex gap-2'>
                        <p className='small  '>s</p>
                        <p className='medium'>M</p>
                        <p className='large'>L</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <p className='cotton'>Cotton</p>
                        <p className='polyester'>Polyester</p>
                        <p className='wool'>Wool</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <p className='cart'><FontAwesomeIcon icon={faShoppingCart} /></p>
                        <p className='heart'><FontAwesomeIcon icon={faHeart} /></p>
                    </div>
                    <div className='d-flex mt-5 gap-2 '>
                        <button className='stock'>In Stock</button>
                        <button className='stock'>Price</button>
                        <input type="number"className='stock' name="" id="" placeholder='1' />
                        <button className='stock'>Add to cart</button>
                    </div>
                    <div className='d-flex mt-2 gap-2 '>
                        <button className='stock'>Add to Wishlist</button>
                        <button className='stock'>Add to compare</button>
                        <button className='stock'>Social Sharing</button>
                        <button className='stock'>Customer Rating</button>
                    </div>
                    <div className='d-flex mt-2 gap-2 '>
                        <button className='stock'>Buy Brand</button>
                        <button className='stock'>Buy Re-conditioned</button>
                        <button className='stock'>Rent Now</button>
                        <button className='stock'>Hire Purchase</button>
                        <button className='stock'>Pre-Order</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Details;