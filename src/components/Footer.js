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
                                    <li><a href="aviation">Aviation Services</a></li>
                                    <li><a href="leasing">Aircraft Leasing</a></li>
                                    <li><a href="charters">Charters</a></li>
                                    <li><a href="hydrology">Hydrology/Meteorology</a></li>
                                    <li><a href="supply">Supply of aviation and maritime equipment</a></li>
                                    <li><a href="concierge">Concierge Services </a></li>
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
                                        <li><a href="clients">Our Clients</a></li>
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
                                                <p><a href="tel:+2348100515182"> +234 810 0515 182</a></p>
                                                <p><a href="tel:+2348153410870"> +234 815 3410 870</a></p>
                                                <p><a href="tel:+447424179683">  +44 7424 179683</a></p>              

                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                            <div className="text">
                                                <p><a href="mailto:needhelp@company.com">info@avidansupport.com</a></p>
                                                <p><a href="mailto:avidansupportltd@gmail.com">avidansupportltd@gmail.com </a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fas fa-map-marker"></span>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    20 Ganges Street, Ministers Hill, Maitama, Abuja FCT
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
                                <p className="site-footer__bottom-text">© Copyright 2023 by <a href="/">avidansupport.com</a></p>
                            </div>
                            <div className="site-footer__bottom-right">
                                <div className="site-footer__social">
                                    <a href="https://twitter.com/avidansupportltd"><i className="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com/avidansupportltd"><i className="fab fa-instagram"></i></a>
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
                    <a href="https://twitter.com/avidansupportltd"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com/avidansupportltd"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            
        </div>
    </div>
    </>
);
}
 
export default Footer;