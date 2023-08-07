import Header from '../components/Header'
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

const HomePage = () => {
    return ( 
        <>
        <Header />
        <Slider />
        <section className="about-two">
            <div className="about-two__shape-2 float-bob-x">
                <img src="assets/images/shapes/about-two-shape-2.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-two__shape-1 float-bob-x">
                                <img src="assets/images/shapes/about-two-shape-1.png" alt="" />
                            </div>
                            <div className="about-two__img-box">
                                <div className="about-two__img-one">
                                    <img src="assets/images/avidan/aviii_img2.png" alt="" />
                                </div>
                                <div className="about-two__img-two">
                                    <img src="assets/images/avidan/home_img.png" alt="" />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">About Avidan Support Ltd</span>
                                <h2 className="section-title__title" >
                                    Aviation & Maritime Industry</h2>
                            </div>
                            <div className="about-two__right-text-box">
                                <p className="about-two__right-text" >Avidan Support Limited was established in 2009 in Nigeria and provides services in the
                                    Aviation, Water, Hydro-Meteorological stations and Maritime industry, by giving
                                    customers excellent products and services that adds value to their performance and
                                    success. Our key focus is primarily on day-to-day supplies of general equipment for
                                    these sectors as well as their management and maintenance. In addition, Avidan
                                    brokerages deal and lease of aircraft, vessels, private jet hire & helicopter, and the
                                    management and maintenance of the fleets.</p>
                            </div>
                            <ul className="about-two__right-points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-tick"></span>
                                    </div>
                                    <div className="text">
                                        <h3>Luxury flights</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-tick"></span>
                                    </div>
                                    <div className="text">
                                        <h3>Quality Equipments</h3>
                                    </div>
                                </li>
                            </ul>
                            <a href="about" className="thm-btn about-two__btn">Dicover more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="feature-three">
            <div className="feature-three__shape-1"
                style={{backgroundImage: 'url("assets/images/shapes/feature-three-shape-1.png")'}}></div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">OUR SERVICES</span>
                    <h2 className="section-title__title">Let’s discover our 
                        <br /> core services</h2>
                </div>
                <div className="feature-three__inner">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="feature-three__single">
                                <div className="feature-three__icon">
                                    <span className="icon-safe-flight"></span>
                                </div>
                                <h4 className="feature-three__title"><a href="about">Aviation <br /> Services</a></h4>
                                <p className="feature-three__text">We are sales representative & maintenance partner of OEM for flight
                                    simulators in USA, Canada and Europe.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="feature-three__single">
                                <div className="feature-three__icon">
                                    <span className="icon-recommend"></span>
                                </div>
                                <h4 className="feature-three__title"><a href="about">Hydro Meteorology
                                        <br /> Station</a></h4>
                                <p className="feature-three__text">We build Hydro-Meteorological Station used to monitor hydrological parameters of 
                                   water reservoirs. </p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="feature-three__single">
                                <div className="feature-three__icon">
                                    <span className="icon-online-booking"></span>
                                </div>
                                <h4 className="feature-three__title"><a href="about">Aircraft <br />
                                        Leasing</a></h4>
                                <p className="feature-three__text"> Avidan Support ACMI/ Leasing team has considerable
                                    aircraft leasing management experience. We give our clients the best.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div className="feature-three__single">
                                <div className="feature-three__icon">
                                    <span className="icon-airport-1"></span>
                                </div>
                                <h4 className="feature-three__title"><a href="about">Charters
                                        <br /> Services</a></h4>
                                <p className="feature-three__text">We arrange on-demand private jet charter  through a
                                    preferred network of operators, giving  the freedom to select the 
                                    make for trips.</p>
                            </div>
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
                        <img src="assets/images/shapes/video-one-shape-1.png" alt="" />
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
                            <a href="contact" className="thm-btn">Contact Us</a>
                        </div>
                        <div className="video-one__btn-two">
                            <a href="about" className="thm-btn">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="faq-one">
            <div className="faq-one__shape">
                <img src="assets/images/shapes/faq-one-shape.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__left">
                            <div className="faq-one__img wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <img src="assets/images/avidan/maintenanceSupply.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-one__right">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">Supply & Maintenance</span>
                                <h2 className="section-title__title">Supply of aviation and maritime equipment</h2>
                                <p>Avidan is a sales representative and maintenance partner of OEM for flight &amp; 
                                                Maritime simulations in the Europe, Canada and United States.</p>
                            </div> 
                            <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                            <Accordion>
                                <AccordionItem header="Knowledgeable Sales Team" initialEntered>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                        <p>
                                            Our staff has over 5 combined years of
                                                experience selling aircraft parts. Any question or concernyou might have can be
                                                easily managed by our friendly and knowledgeable team.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionItem>
                                <AccordionItem header="Immediate Processing" style={{marginTop:14+'px'}}>
                                <div className="inner">
                                      <p>As soon as your order is placed, we immediately
                                                    process all items and prepare your order for shipping. If there are any issues, we
                                                    will contact you right away to find a solution that meets your expectations.</p>
                                    </div>  
                                </AccordionItem>
                                <AccordionItem header="Follow-up & Support" style={{marginTop:14+'px'}}>
                                <div className="inner">
                                   <p>Once you’ve received your part, we will be there to
                                        provideany support or help you might need. We’ll do whatever is necessary to
                                        help you find success.
                                    </p>
                                </div>
                                </AccordionItem>
                                
                               
                            </Accordion>
                            </div>
                            <div className="video-one__btn-one mt-4">
                                <a href="contact" className="thm-btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <section className="get-flight-two">
            <div className="get-flight-two__shape-3 zoom-fade-2">
                <img src="assets/images/shapes/get-flight-two-shape-3.png" alt="" />
            </div>
            <div className="get-flight-two__shape-4 float-bob-x">
                <img src="assets/images/shapes/get-flight-two-shape-4.png" alt="" />
            </div>
            <div className="container">
                <div className="get-flight-two__content-box">
                    <div className="get-flight-two__shape-2 wow slideInRight" data-wow-delay="100ms"
                        data-wow-duration="2500ms">
                        <img src="assets/images/shapes/get-flight-two-shape-2.png" alt="" className="float-bob-y" />
                    </div>
                    <div className="get-flight-two__inner">
                        <div className="get-flight-two__shape-1 float-bob-x">
                            <img src="assets/images/shapes/get-flight-two-shape-1.png" alt="" />
                        </div>
                        <div className="section-title text-left">
                            <span className="section-title__tagline">Get your flight</span>
                            <h2 className="section-title__title">Request for private flight</h2>
                        </div>
                        <form action="sendeMail.php" className="get-flight__form contact-form-validated"
                            novalidate="novalidate">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="get-flight__form-input-box">
                                        <input type="text" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="get-flight__form-input-box">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="get-flight__form-input-box">
                                        <input type="text" name="phone" placeholder="Phone number" id="" />
                                   
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="row">
                                        <div className="get-flight__form-input-box">
                                            <input type="text" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                             
                                <div className="col-xl-6 col-lg-6">
                                    <div className="get-flight__form-input-box">
                                        <button type="submit" className="thm-btn get-flight__btn">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p className="get-flight__content-text"> <span>*</span> After sending request. We’ll contact you
                            for more details about charter.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonial-two">
            <div className="testimonial-two__shape-1"
                style={{backgroundImage: 'url("assets/images/shapes/testimonial-two-shape-1.png")'}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="testimonial-two__left">
                            <div className="section-title text-left">
                                <span className="section-title__tagline">customers feedback</span>
                                <h2 className="section-title__title">What they’re saying about our services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">
                        <div className="testimonial-two__right">
                            <div className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
                                data-owl-options='{
                                "loop": true,
                                "autoplay": true,
                                "margin": 30,
                                "nav": true,
                                "dots": false,
                                "smartSpeed": 500,
                                "autoplayTimeout": 10000,
                                "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"],
                                "responsive": {
                                    "0": {
                                        "items": 1
                                    },
                                    "768": {
                                        "items": 2
                                    },
                                    "992": {
                                        "items": 2
                                    },
                                    "1200": {
                                        "items": 1.5
                                    }
                                }
                            }'>
                                <div className="item">
                                    <div className="testimonial-two__single">
                                        <div className="testimonial-two__content">
                                            {/* <div className="testimonial-two__img-box">
                                                <div className="testimonial-two__img">
                                                    <img src="      " alt="" />
                                                </div>
                                            </div> */}
                                            <div className="testimonial-two__quote">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <p className="testimonial-two__text">Avidan support has been helping with the supplies of aviation equipments for more than 5 years. They're reliable. </p>
                                            <div className="testimonial-two__star">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="testimonial-two__client-info">
                                            <h4 className="testimonial-two__client-name">Emmanuel Badmus</h4>
                                            <p className="testimonial-two__client-sub-title">Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-two__single">
                                        <div className="testimonial-two__content">
                                            {/* <div className="testimonial-two__img-box">
                                                <div className="testimonial-two__img">
                                                    <img src="assets/images/testimonial/testimonial-2-2.jpg" alt="" />
                                                </div>
                                            </div> */}
                                            <div className="testimonial-two__quote">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <p className="testimonial-two__text">When it comes to Hydrology, I give it to Avidan, they're specialised in this field with experienced personnels.</p>
                                            <div className="testimonial-two__star">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="testimonial-two__client-info">
                                            <h4 className="testimonial-two__client-name">Gbenga Williams</h4>
                                            <p className="testimonial-two__client-sub-title">Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-two__single">
                                        <div className="testimonial-two__content">
                                            {/* <div className="testimonial-two__img-box">
                                                <div className="testimonial-two__img">
                                                    <img src="assets/images/testimonial/testimonial-2-3.jpg" alt="" />
                                                </div>
                                            </div> */}
                                            <div className="testimonial-two__quote">
                                                <span className="icon-quote"></span>
                                            </div>
                                            <p className="testimonial-two__text">We love dealing with Avidan as they have a great customer service. Keep it up.</p>
                                            <div className="testimonial-two__star">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="testimonial-two__client-info">
                                            <h4 className="testimonial-two__client-name">Mary Jackson</h4>
                                            <p className="testimonial-two__client-sub-title">Customer</p>
                                        </div>
                                    </div>
                                </div>
                                   <div className="item">
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     <Footer />
        </>
     );
}
 
export default HomePage;