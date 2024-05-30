import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { NavLink } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { PiSmileySticker } from "react-icons/pi";


export default function Header() {
    const [navShrink, setNavShrink] = useState(false)
    const [search, setSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")


    useEffect(() => {
        if (searchValue !== "") {
            setSearch(true)
        }
    }, [searchValue])

    const handleNavShrink = () => {
        if (window.scrollY > 0) {
            setNavShrink(true)
        } else {
            setNavShrink(false)
        }
    }

    window.addEventListener('scroll', handleNavShrink)

    return (
        <>
            <header style={search ? { top: "48px" } : { top: "0" }} className={`header container ${navShrink ? "nav__shrink" : ""} ${search ? "show__search__box" : ""}`} id='header'>
                <nav className="nav">
                    <NavLink to={"/"} className="nav__logo"> AliExpress </NavLink>
                    <div className="nav__actions">
                        <button className='nav__button'><MenuBookIcon /> Catalog </button>
                        <div className='nav__search__box'>
                            <input
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                                type="text"
                                className="nav__search__input"
                                placeholder="hasbro"
                            />
                            {/* <button onClick={() => setSearch(true)} className="nav__search__btn">
                                <IoSearchOutline />
                            </button> */}
                            <button className='nav__input__button'>Find</button>
                        </div>

                        <button className='nav__button'>
                            <NavLink to="/wishlist" className="nav__wishlist__link">
                                <FavoriteIcon className='nav__icon' />
                                <span>0</span>
                            </NavLink>
                        </button>
                        <button className='nav__button'>
                            <NavLink to="/cart" className="nav__cart__link">
                                <ShoppingCartSharpIcon className='nav__icon' />
                                <span>0</span>
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
