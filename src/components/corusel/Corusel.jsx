import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import hero1 from '../../images/hero1.png';
import hero2 from '../../images/hero2.png';
import hero3 from '../../images/hero3.png';
import hero4 from '../../images/hero4.png';


function Corusel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className="container">
                <div className="header__bootm">
                    <div className="header__bootm__left">
                        <button className='bootm__button1'>MONTH OF RED PRICES </button>
                        <button className='bootm__button2'>Chines brends</button>
                    </div>
                    <div className="header__bootm__left">
                        <option className='bootm__select'>
                            chilonzor tumani
                        </option>
                        <button className='language'>ENG</button>
                        <button className='language'>UZ</button>
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='carusel__img' src={hero1} alt="jnbjhbhjb" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carusel__img' src={hero2} alt="jnbjhbhjb" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carusel__img' src={hero3} alt="jnbjhbhjb" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carusel__img' src={hero4} alt="jnbjhbhjb" />
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default Corusel