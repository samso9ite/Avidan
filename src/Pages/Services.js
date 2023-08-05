import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
    return ( 
    <>
        <Header />   
        <section className="page-header">
            <div className="page-header-bg" style={{backgroundImage: 'url("assets/images/avidan/slider4.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Our services</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </section> 
         <section className="services-page">
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">what we’re offering</span>
                    <h2 className="section-title__title">Select the service <br /> according to your work</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/avidan/maritime.png" alt="" />
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><a href="#">Hydro-Meteorology Station</a>
                                    </h3>
                                </div>
                                <p className="services-one__text">We build and manage hydro-meteorology station</p>
                                <a href="">   <span className="services-one__sub-title mt-3">View more</span></a>
                                <div className="services-one__arrow">
                                    <a href="#"><i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/avidan/aviation.png" alt="" />
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><a href="maintainance.html">Aviation</a>
                                    </h3>
                                </div>
                                <p className="services-one__text">We supply simple to complex spare parts for aviation, we also manage & maintain flights</p>
                                <a href="maintainance.html">   <span className="services-one__sub-title mt-3">View more</span></a>
                                <div className="services-one__arrow">
                                    <a href="maintainance.html"><i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/avidan/maintainance.png" alt="" />
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><a href="leasing.html">Aircraft Leasing</a></h3>
                                </div>
                                <p className="services-one__text">As a broker, Avidan Support can provide aircraft anywhere in the world that meet requirement      </p>
                                <a href="leasing.html">   <span className="services-one__sub-title mt-3">View more</span></a>
                                <div className="services-one__arrow">
                                    <a href="leasing.html"><i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/avidan/jetIm.webp" alt="" />
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><a href="charters.html">Charters</a></h3>
                                </div>
                                <p className="services-one__text">We arrange on-demand private jet charter worldwide through a
                                    preferred network of operators.</p>
                                    <a href="charters.html">   <span className="services-one__sub-title mt-3">View more</span></a>
                                <div className="services-one__arrow">
                                    <a href="charters.html"><i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/avidan/jetInterior.webp" alt="" />
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><a href="interiors.html">Interior Services</a></h3>
                                </div>
                                <p className="services-one__text">We at Avidan also specialize in full interior cleaning of aircrafts.</p>
                                <a href="interiors.html">   <span className="services-one__sub-title mt-3">View more</span></a>
                                <div className="services-one__arrow">
                                    <a href="interiors.html"><i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__img">
                                <img src="assets/images/avidan/conciergeM.webp" alt="" />
                            </div>
                            <div className="services-one__content">
                                <div className="services-one__title-box">
                                    <h3 className="services-one__title"><a href="concierge.html">Concierge Services</a></h3>
                                </div>
                                <p className="services-one__text">With superior hospitality and service, we make your stay more enjoyable.</p>
                                <a href="concierge.html">   <span className="services-one__sub-title mt-3">View more</span></a>
                                <div className="services-one__arrow">
                                    <a href="concierge.html"><i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </> );
}
 
export default Services;