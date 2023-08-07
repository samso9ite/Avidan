const Slider = () => {
    return ( 
        <>
        <section className="main-slider-two clearfix">
            <div className="swiper-container thm-swiper__slider" data-swiper-options='{"slidesPerView": 1, "loop": true,
                "effect": "fade",
                "pagination": {
                "el": "#main-slider-pagination",
                "type": "bullets",
                "clickable": true
                },
                "navigation": {
                "nextEl": "#main-slider__swiper-button-next",
                "prevEl": "#main-slider__swiper-button-prev"
                },
                "autoplay": {
                "delay": 5000
                }}'>
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="image-layer-two"
                            style={{backgroundImage: 'url("assets/images/avidan/slider4.jpeg")'}}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="main-slider-two__content">
                                        <h2 className="main-slider-two__title" style={{}}>Day-To-Day Aviation <br /> Equipments Supplies</h2>
                                        <div className="main-slider-two__btn-box">
                                            <a href="contact.html" className="thm-btn main-slider__btn">Contact Us</a>        
                                            <a href="about.html" className="thm-btn main-slider__btn-two">Read More</a>
                                        </div>
                                        <div className="main-slider-two__shape-1">
                                            <img src="assets/images/shapes/main-slider-two-shape-1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="image-layer-two"
                            style={{backgroundImage: 'url("assets/images/avidan/slider3.webp")'}}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="main-slider-two__content">
                                        <h2 className="main-slider-two__title" style={{}}>Need to  procure<br /> maritime simulators?</h2>
                                        <div className="main-slider-two__btn-box">
                                            <a href="contact.html" className="thm-btn main-slider__btn">Contact Us</a>
                                            <a href="about.html" className="thm-btn main-slider__btn-two">Read More</a>
                                        </div>
                                        <div className="main-slider-two__shape-1">
                                            <img src="assets/images/shapes/main-slider-two-shape-1.png" alt="" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="image-layer-two"
                            style={{backgroundImage: 'url("assets/images/avidan/slider2.webp")'}}></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="main-slider-two__content">
                                        <h2 className="main-slider-two__title" style={{}}>A Better Way <br /> to Procure Flight</h2>
                                        <div className="main-slider-two__btn-box">
                                            <a href="contact.html" className="thm-btn main-slider__btn">Contact Us</a>
                                            <a href="about.html" className="thm-btn main-slider__btn-two">Read More</a>
                                        </div>
                                        <div className="main-slider-two__shape-1">
                                            <img src="assets/images/shapes/main-slider-two-shape-1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="main-slider__nav">
                    <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                        <i className="icon-left-arrow"></i>
                    </div>
                    <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                        <i className="icon-right-arrow"></i>
                    </div>
                </div>

            </div>
        </section>
        </>
     );
}
 
export default Slider;