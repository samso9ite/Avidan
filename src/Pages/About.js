
import Footer from "../components/Footer";

const AboutPage = () => {
    return ( 
        <>
        <section className="page-header">
            <div className="page-header-bg" style={{backgroundImage: 'url("assets/images/avidan/slider1.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>About us</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><span>/</span></li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="about-four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-four__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-four__img">
                                <img src="assets/images/avidan/wrk3.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-four__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">About Company</span>
                                <h2 className="section-title__title">Aviation & Maritime Industry</h2>
                            </div>
                       
                            <p className="about-four__text-2">
                                Avidan Support Limited was established in 2009 in Nigeria and provides services in the
                                Aviation, Water, Hydro-Meteorological stations and Maritime industry, by giving
                                customers excellent products and services that adds value to their performance and
                                success. Our key focus is primarily on day-to-day supplies of general equipment for
                                these sectors as well as their management and maintenance. In addition, Avidan brokerages specialize in the negotiation and facilitation of aircraft and vessel transactions, encompassing both sales and leases. Our services extend to arranging private jet rentals
                                 and helicopter charters, as well as overseeing the comprehensive fleet management and maintenance operations.. Additional services include installation
                                and maintenance of aeronautical (weather) and air navigation communication systems.
                                Our solutions are specifically tailored to our customer’s business model.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <section className="counter-three">
            <div className="counter-three__shape-1"
                style={{backgroundImage: 'url("assets/images/shapes/counter-three-shape-1.png")'}}></div>
            <div className="container">
                <ul className="list-unstyled counter-three__list">
                    <li className="counter-three__single wow fadeInUp" data-wow-delay="100ms">
                        <div className="counter-three__count-box count-box">
                            <h3 className="count-text" data-stop="14" data-speed="1500">14</h3>
                        </div>
                        <p className="counter-three__text">Years of Experience</p>
                    </li>
                    <li className="counter-three__single wow fadeInUp" data-wow-delay="200ms">
                        <div className="counter-three__count-box count-box">
                            <h3 className="count-text" data-stop="25" data-speed="1500">25</h3>
                        </div>
                        <p className="counter-three__text">Experienced Team</p>
                    </li>
                    <li className="counter-three__single wow fadeInUp" data-wow-delay="300ms">
                        <div className="counter-three__count-box count-box">
                            <h3 className="count-text" data-stop="10" data-speed="1500">5</h3>
                        </div>
                        <p className="counter-three__text">Partners</p>
                    </li>
                    <li className="counter-three__single wow fadeInUp" data-wow-delay="400ms">
                        <div className="counter-three__count-box count-box">
                            <h3 className="count-text" data-stop="20" data-speed="1500">100+</h3>
                        </div>
                        <p className="counter-three__text">Satisfied Clients</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="testimonial-one">
            <div className="testimonial-one__shape-1 zoom-fade-2">
                <img src="assets/images/shapes/testimonial-shape-1.png" alt="" />
            </div>
            <div className="testimonial-one__shape-2 float-bob-x">
                <img src="assets/images/shapes/testimonial-shape-2.png" alt="" />
            </div>
            <div className="testimonial-one__shape-3 float-bob-x">
                <img src="assets/images/shapes/testimonial-shape-3.png" alt="" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">customers feedback</span>
                    <h2 className="section-title__title">What they’re talking about <br /> our flight services</h2>
                </div>
                <div className="testimonial-one__bottom">
                    <div className="testimonial-one__shape-4"
                        style={{backgroundImage: 'url("assets/images/shapes/testimonial-shape-4.png")'}}></div>
                    <div className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel" data-owl-options='{
                        "loop": true,
                        "autoplay": true,
                        "margin": 30,
                        "nav": false,
                        "dots": false,
                        "smartSpeed": 500,
                        "autoplayTimeout": 10000,
                        "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow1\"></span>"],
                        "responsive": {
                            "0": {
                                "items": 1
                            },
                            "768": {
                                "items": 1
                            },
                            "992": {
                                "items": 2
                            },
                            "1200": {
                                "items": 2
                            }
                        }
                    }'>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__client-img-box">
                                   
                                </div>
                                <div className="testimonial-one__content">
                                    <p className="testimonial-one__content-text">Avidan support has been helping with the supplies of aviation equipments for more than 5 years. They're reliable.</p>
                                    <div className="testimonial-one__rating">
                                        <div className="testimonial-one__rating-icon">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="testimonial-one__user">
                                            <div className="testimonial-one__user-name">
                                                <h4>Emmanuel Badmus</h4>
                                                <p>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__client-img-box">
                                  
                                </div>
                                <div className="testimonial-one__content">
                                    <p className="testimonial-one__content-text">TWhen it comes to Hydrology, I give it to Avidan, they're specialised in this field with experienced personnels.</p>
                                    <div className="testimonial-one__rating">
                                        <div className="testimonial-one__rating-icon">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="testimonial-one__user">
                                            <div className="testimonial-one__user-name">
                                                <h4>Gbenga Williams</h4>
                                                <p>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__client-img-box">
                                  
                                </div>
                                <div className="testimonial-one__content">
                                    <p className="testimonial-one__content-text">We love dealing with Avidan as they have a great customer service. Keep it up.</p>
                                    <div className="testimonial-one__rating">
                                        <div className="testimonial-one__rating-icon">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="testimonial-one__user">
                                            <div className="testimonial-one__user-name">
                                                <h4>Mary Jackson</h4>
                                                <p>Customer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="video-one">
            <div className="video-one__bg" style={{backgroundImage: 'url("assets/images/backgrounds/video-one-1.jpg")'}}></div>
            <div className="container">
                <div className="video-one__inner">
                    <div className="video-one__shape-one float-bob-x">
                        <img src="assets/images/shapes/video-one-shape-1.png" alt=" " />
                    </div>
                    <div className="video-one__video-link">
                        <a href="#" className="video-popup">
                            <div className="video-one__video-icon">
                            <img src='assets/images/avidan/favAvidan.png' />    
                            </div>
                        </a>
                    </div>  
                    <div className="video-one__title-box">
                        <h3>Share requirements and our <br /> charter experts will send you a quote</h3>
                    </div>
                    <div className="video-one__button">
                        <div className="video-one__btn-one">
                            <a href="contact" className="thm-btn">Book Now</a>
                        </div>
                        <div className="video-one__btn-two">
                            <a href="about" className="thm-btn">Read More</a>
                        </div>
                    </div>      
                </div>
            </div>
        </section>
        <section className="cta-one">
            <div className="cta-one__bg-shape" style={{backgroundImage: 'url("assets/images/shapes/cta-one-bg-shape.png")'}}>
            </div>
            <div className="container">
                <div className="cta-one__content">
                    <div className="cta-one__title">
                        <h3>A better way to procure flight</h3>
                    </div>
                    <div className="cta-one__btn-box">
                        <a href="contact" className="thm-btn cta-one__btn">Get in touch?</a>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
     );
}
 
export default AboutPage;