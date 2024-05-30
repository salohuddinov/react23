import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import axios from "../../api";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import { API_URL } from '../../static'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Star from '../../components/star/Star';
import Product from '../../components/product/Product';
import SingleBtm from '../../components/singlebtm/SingleBtm';


function Single() {
    const [product, setProduct] = useState(null)
    const [loading, setLoding] = useState(false)
    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishlist.value);
    const cart = useSelector((state) => state.cart.value);
    const { id } = useParams()

    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios
            .get("/products")
            .then((res) => setData(res.data.products))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoding(true)
        axios
            .get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [])

    if (loading) {
        return <div className="loading">
            <div class="loader">
                <div class="load-inner load-one"></div>
                <div class="load-inner load-two"></div>
                <div class="load-inner load-three"></div>
                <span class="text">Loading...</span>
            </div>
        </div>
    };

    return (
        <>
            <div className="container">
                <div className='singleproduct'>
                    <div className="images">
                        <img className='single__img' src={product?.thumbnail} alt="sg" />
                        <div className="imgs">
                            <img className='smal__img' src={product?.images[0]} alt="hjbbhb" />
                            <img className='smal__img' src={product?.images[1]} alt="hjbbhb" />
                            <img className='smal__img' src={product?.images[2]} alt="hjbbhb" />
                            <img className='smal__img' src={product?.images[3]} alt="hjbbhb" />
                        </div>
                    </div>
                    <div className="single__right">
                        <h2>Nike Airmax 270 React</h2>
                        <div className="starwrapper">
                            <Star />
                            <p>({product?.rating} Review)</p>
                            <h2>Submit a review</h2>
                        </div>
                        <div className="lings"></div>
                        <div className="pricee">
                            <h2>${product?.price}</h2>
                            <h3>${product?.discountPercentage}</h3>
                            <p>{product?.stock}% off</p>
                        </div>
                        <div className="aboutproduct">
                            <h3>Availability:</h3>
                            <h3>In stock</h3>
                            <h3>Category:</h3>
                            <h3>Accessories</h3>
                            <h3>Free shipping</h3>
                        </div>
                        <div className="lings"></div>
                        <div className="collor">
                            <h3>Select Color:</h3>
                            <input type="color" />
                            <input type="color" />
                            <input type="color" />
                            <input type="color" />
                        </div>
                        <div className="size">
                            <h3>Size</h3>
                            <select className='size__select'>
                                <option value="XS">XS</option>
                                <option value="XS">X</option>
                                <option value="XS">S</option>
                                <option value="XS">M</option>
                            </select>
                        </div>
                        <form className='element'>
                            <div className='kenzo'>
                                <button type='button' className='button__span'>-</button>
                                <button type='button'>2</button>
                                <button type='button' className='button__span'>+</button>
                            </div>
                            <div className="add">
                                <button type='button' className='element__button' onClick={() => dispatch(addToCart(el))}>Add To Cart</button>
                                <button type='button' className='span__icons' onClick={() => dispatch(toggleToWishes(el))}><FavoriteBorderIcon /></button>
                            </div>
                        </form>
                        <div className="edlink">
                            <button className='edlink__button1'><FaFacebookF /> Share on Facebook</button>
                            <button className='edlink__button2'><FaTwitter /> Share on Twitter</button>
                        </div>
                    </div>
                    <div className="single__card">
                        <img src="https://random.imagecdn.app/500/390"></img>
                        <Star />
                        <div className="pricce">
                            <h2>${product?.price}</h2>
                            <h3>$534,33</h3>
                        </div>
                        <div className="act"></div>
                    </div>
                </div>
                <div className="single__bootm">
                    <SingleBtm />
                </div>
                <Product data={data.slice(0, 4)} />
            </div >
        </>
    )
}

export default Single