import React from 'react'
import './Section.css'
import watch1 from '../../images/watch3.png'
import watch2 from '../../images/watch2.png'
import watch3 from '../../images/watch1.png'

function Section() {
    return (
        <>
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__card">
                        <img src={watch1} alt="" />
                        <div className="seshon">
                            <h2>Apple</h2>
                            <p>Apple is one of the most famous smart watches providing company.</p>
                        </div>
                    </div>
                    <div className="main__card">
                        <img src={watch2} alt="" />
                        <div className="seshon">
                            <h2>Xiaomi</h2>
                            <p>Xiaomi smart watches are produced by MI company.</p>
                        </div>
                    </div>
                    <div className="main__card">
                        <img src={watch3} alt="" />
                        <div className="seshon">
                            <h2>FitBit</h2>
                            <p>FitBit smart watches are best for there health and fitness features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section