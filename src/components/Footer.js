const Footer = () => {
    return ( 
        <>
        <footer className="site-footer">
            <div className="container">
                <div className="site-footer__inner">
                    <div className="site-footer__shape-1 zoom-fade-3">
                        <img src="assets/images/shapes/site-footer-shape-1.png" alt="" />
                    </div>
                    <div className="site-footer__top">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <a href="#"><img src="assets/images/avidan/favAvidan.png" alt="" /></a>
                                    </div>
                                    <div className="footer-widget__about-text-box">
                                        <p className="footer-widget" style={{color: '#fff'}}>We take great pride
                                            in our thoroughness, and stake our reputation on our attention to detail and our ability
                                            to manage the most complex of projects and logistical requirements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget__column footer-widget__Explore">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Services</h3>
                                    </div>
                                    <ul className="footer-widget__Explore-list list-unstyled">
                                        <li><a href="aviation">Aviation</a></li>
                                        <li><a href="#">Hydro-Meteorology</a></li>
                                        <li><a href="leasing">Airflight Leasing</a></li>
                                        <li><a href="charters">Charter</a></li>
                                        <li><a href="interior">Interior Services</a></li>
                                        <li><a href="concierge">Concierge Services</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget__column footer-widget__links">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Links</h3>
                                    </div>
                                    <ul className="footer-widget__Explore-list list-unstyled">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="about">About</a></li>
                                        <li><a href="services">Services</a></li>
                                        <li><a href="contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget__column footer-widget__Contact">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Contact</h3>
                                    </div>
                                    <ul className="footer-widget__Contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-phone"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="tel:+9288006780">+234 802 3060 791</a></p>
                                                <p><a href="tel:+9288006780">+447984340511</a></p>              

                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="mailto:needhelp@company.com">info@avidansupport.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-map-marker"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Domestic Wing,
                                                    Muritala Muhammed Airport
                                                    Ikeja, Lagos .Nigeria
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-footer__bottom">
                        <div className="site-footer__bottom-inner">
                            <div className="site-footer__bottom-left">
                                <p className="site-footer__bottom-text">© Copyright 2023 by <a href="#">avidansupport.com</a></p>
                            </div>
                            <div className="site-footer__bottom-right">
                                <div className="site-footer__social">
                                    <a href="https://twitter.com/avidansupport"><i className="fab fa-twitter"></i></a>
                                    <a href="https://facebook.com/avidansupport"><i className="fab fa-facebook"></i></a>
                                    <a href="https://instagram.com/avidansupport"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    
    <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler"><i className="fa fa-times"></i></span>

            <div className="logo-box">
                <a href="index-2.html" aria-label="logo image">
                    <img src="assets/images/avidan/favLogo.png" width="143"
                        alt="" /></a>
            </div>
            <div className="mobile-nav__container"></div>
         

            <ul className="mobile-nav__contact list-unstyled">
                <li>
                    <i className="fa fa-envelope"></i>
                    <a href="mailto:info@avidansupport.com">info@avidansupport.com</a>
                </li>
                <li>
                    <i className="fa fa-phone-alt"></i>
                    <a href="tel:+2348023060791">234 802 3060 791</a>
                </li>
            </ul>
            <div className="mobile-nav__top">
                <div className="mobile-nav__social">
                    <a href="https://twitter.com/avidansupport"><i className="fab fa-twitter"></i></a>
                    <a href="https://facebook.com/avidansupport"><i className="fab fa-facebook"></i></a>
                    <a href="https://instagram.com/avidansupport"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            
        </div>
    </div>
    </>
);
}
 
export default Footer;