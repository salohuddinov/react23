import React from 'react'
import './Serchbtm.css'
import { Link } from 'react-router-dom'

const Serchbtm = ({ data }) => {
    let serchItem = data?.map(el =>
        <div className='serch__item' key={el.id}>
            <Link to={`/single/${el.id}`}><h2>{el.title}</h2></Link>
            <img src={el.thumbnail} alt={el.title} />
        </div>)
    return (
        <>
            <div className="container">
                <div className="navbar__serch__rezalt">
                    {serchItem}
                </div>
            </div>
        </>
    )
}

export default Serchbtm