import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { NavLink, Link, useLocation } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { PiSmileySticker } from "react-icons/pi";
import { useSelector } from 'react-redux';  // Redux xookini import qilish

export default function Header() {
    const [data, setData] = useState([]);
    const [navShrink, setNavShrink] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const location = useLocation();

    // Redux dan wishes va carts holatini olish
    const wishes = useSelector((state) => state.wishlist.value);
    const carts = useSelector((state) => state.cart.value);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(res => setData(res.data.products))
            .catch(err => console.log(err));
    }, []);

    let handleSearch = (data) => {
        return data?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase().trim()));
    }

    const handleNavShrink = () => {
        if (window.scrollY > 0) {
            setNavShrink(true);
        } else {
            setNavShrink(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavShrink);
        return () => {
            window.removeEventListener('scroll', handleNavShrink);
        };
    }, []);

    useEffect(() => {
        setSearchValue(""); // location o'zgarganda searchValue ni bo'shatish
    }, [location]);

    return (
        <>
            <header style={search ? { top: "48px" } : { top: "0" }} className={`header container ${navShrink ? "nav__shrink" : ""}`} id='header'>
                <nav className="nav">
                    <NavLink to={"/"} className="nav__logo"> AliExpress </NavLink>
                    <div className="nav__actions">
                        <button className='nav__button'><MenuBookIcon /> </button>
                        <div className='nav__search__box'>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="nav__search__input"
                                placeholder="hasbro"
                            />
                            <button className='nav__input__button'>Find</button>
                            <ul className='serch__const'>
                                {
                                    searchValue.trim() ?
                                        handleSearch(data).length ?
                                            handleSearch(data)?.map(product => (
                                                <div className="serch__const__div" key={product.id}>
                                                    <Link to={`/single/${product.id}`}>
                                                        <h4 className='serch__const__div__h4'>{product.title}</h4>
                                                    </Link>
                                                    <img className='serch__const__div__img' src={product.thumbnail} alt={product.title} />
                                                </div>
                                            ))
                                            :
                                            <p className='empty'>Malumot topilmad</p>
                                        :
                                        <></>
                                }
                            </ul>
                        </div>

                        <button className='nav__button'>
                            <NavLink to="/wishlist" className="nav__wishlist__link">
                                <FavoriteIcon className='nav__icon' />
                                {wishes.length > 0 ? (
                                    <sup>
                                        <span className='sup__p'>{wishes.length}</span>
                                    </sup>
                                ) : (
                                    <></>
                                )}
                            </NavLink>
                        </button>
                        <button className='nav__button'>
                            <NavLink to="/cart" className="nav__cart__link">
                                <ShoppingCartSharpIcon className='nav__icon' />
                                {carts.length > 0 ? (
                                    <sup>
                                        <span className='sup__p'>{carts.length}</span>
                                    </sup>
                                ) : (
                                    <></>
                                )}
                            </NavLink>
                        </button>
                        <button className='nav__button'>
                            <NavLink className="nav__wishlist__link">
                                <PiSmileySticker className='smile' />
                            </NavLink>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
}
