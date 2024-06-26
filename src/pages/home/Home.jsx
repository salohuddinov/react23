import React, { useEffect, useState } from "react";
import Product from '../../components/product/Product'
import axios from "../../api";
import Corusel from "../../components/corusel/Corusel";
import home from '../../images/home.png'

const Home = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(52);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        setLoading(true);
        axios
            .get(`/products?limit=${count}`)
            .then((res) => {
                setData(res.data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [count]);

    return (
        <>
            <Corusel />
            <Product data={data} />
            <div className="container">
                <img className="homeimg" src={home} alt="" />
            </div>
            <Product data={data.slice(0, 10)} />
            <Product data={data.slice(0, 30)} />
        </>
    )
}

export default Home