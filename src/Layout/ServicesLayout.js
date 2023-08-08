import Footer from "../components/Footer";

const ServicesLayout = (props) => {
    return ( 
        <>
            <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="service-details__left">
                            <div className="service-details__category">
                                <ul className="service-details__category-list list-unstyled">
                                    <li className="active"  ><a href="aviation">Aviation
                                        </a>
                                    </li>

                                    <li><a href="#">Hydro-Meteorology Station<span
                                                className="fas fa-angle-right"></span></a></li>
                                    <li><a href="leasing">Aircraft Leasing<span
                                                className="fas fa-angle-right"></span></a></li>

                                    <li><a href="charters">Charters<span
                                                className="fas fa-angle-right"></span></a></li>
                                    <li><a href="supply">Supply of Aviation & Maritime Equipment<span
                                                className="fas fa-angle-right"></span></a>
                                    </li>

                                    <li><a href="military">Military Equipment<span
                                                className="fas fa-angle-right"></span></a></li>

                                    <li><a href="concierge">Concierge Services<span
                                                className="fas fa-angle-right"></span></a></li>

                                </ul>
                            </div>
                            <div className="service-details__need-help">
                                <div className="service-details__need-help-bg"
                                    style={{backgroundImage: 'url("assets/images/backgrounds/service-details-need-help-bg.jpg")'}}>
                                </div>
                                <div className="service-details__need-help-icon">
                                    <span className="icon-phone-call"></span>
                                </div>
                                <h2 className="service-details__need-help-title">Book instantly <br /> private jet charters
                                    <br /> services</h2>
                                <div className="service-details__need-help-contact">
                                    <p>Call anytime</p>
                                    <a href="tel:9298006802">+234 802 3060 791</a>
                                </div>
                            </div>
                        </div>
                    </div>
                            {props.children}
                    </div>
            </div>
        </section>
        <Footer />
        </>
     );
}
 
export default ServicesLayout;