import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";
import { API_URL } from "../../static"
import axios from "../../api"
import Skeleton from '../skeleton/Skeleton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
const Product = ({ data }) => {
    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)
    const [categoryValue, setCategoryValue] = useState("all")

    const dispatch = useDispatch();
    const wishes = useSelector((state) => state.wishlist.value);
    const cart = useSelector((state) => state.cart.value);

    useEffect(() => {
        axios
            .get(`${API_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setLoading(true)
        let url = categoryValue === "all" ?
            `${API_URL}?limit=${count}` :
            `${API_URL}/category/${categoryValue}?limit=${count}`
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [count, categoryValue])


    let products = data?.map((el) => (
        <div key={el.id} className="cardd">
            <div class="card">
                <div class="icon">
                    <img className='image' src={el.thumbnail} alt="" />
                </div>
                <span>
                    <button className='like__button' onClick={() => dispatch(addToCart(el))}>
                        {
                            cart.some(c => c.id === el.id) ?
                                <ShoppingCartRoundedIcon /> :
                                <ShoppingCartOutlinedIcon />
                        }
                    </button>
                    <button className='cart__button' onClick={() => dispatch(toggleToWishes(el))}>
                        {
                            wishes.some(w => w.id === el.id) ?
                                <FavoriteIcon /> :
                                <FavoriteBorderIcon />
                        }
                    </button>
                </span>
            </div>
            <Link to={`/single/${el.id}`}>
                <h4 className='title'>{el.description}</h4>
            </Link>
            <div className="count">
                <button className="count__button"><StarPurple500SharpIcon /></button>
                <p className="count__p">{el.rating}</p>
                <p className="count__p">{el.brand}</p>
            </div>
            <div className="costm">
                <p className="oldprice">{el.discountPercentage} UZS</p>
                <p className="prise">{el.price} UZS </p>
            </div>
        </div>
    ));


    return (
        <>
            <div className="container">
                <div className="product">
                    {loading && <Skeleton />}
                    <div className="product__wrapper">{products}</div>
                </div>
            </div>
        </>
    )
}

export default Product