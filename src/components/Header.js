const Header = () => {
    return ( 
        <>
            <header className="main-header-two">
                <div className="main-header-two__top">
                    <div className="container">
                        <div className="main-header-two__top-inner">
                            <div className="main-header-two__top-left">
                                <ul className="list-unstyled main-header-two__contact-list">
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-map-marker"></i>
                                        </div>
                                        <div className="text">
                                            <p>Domestic Wing,
                                                Muritala Muhammed Airport
                                                Ikeja, Lagos .Nigeria
                                            </p>
                                        </div>
                                    </li>
                                    <li>    
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="text">
                                            <p><a href="mailto:info@avidansupport.com">info@avidansupport.com</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-header-two__top-right">
                                <div className="main-header-two__social">
                                    <a href="https://twitter.com/avidansupport"><i className="fab fa-twitter"></i></a>
                                    <a href="https://facebook.com/avidansupport"><i className="fab fa-facebook"></i></a>
                                    <a href="https://instagram.com/avidansupport"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="container">
                            <div className="main-menu-two__wrapper-inner">
                                <div className="main-menu-two__wrapper-inner-border"></div>
                                <div className="main-menu-two__left">
                                    <div className="main-menu-two__logo">
                                        <a href="/"><img src="assets/images/avidan/favAvidan.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="main-menu-two__right">
                                    <div className="main-menu-two__main-menu-box">
                                        <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                        <ul className="main-menu__list one-page-scroll-menu">
                                            <li  className={({isActive}) => isActive ?  'current' : ""} >
                                                <a href="/">Home </a>
                                              
                                            </li>
                                            <li className={({isActive}) => isActive ?  "current" : ""}>
                                                <a href="about">About</a>
                                            </li>
                                            <li className={({isActive}) => isActive ?  "current" : ""}>
                                                <a href="services">Services</a>
                                                <ul className="shadow-box">
                                                    <li><a href="aviation">Aviation Services</a></li>
                                                    <li><a href="leasing">Aircraft Leasing</a></li>
                                                    <li><a href="charters">Charters</a></li>
                                                    <li><a href="interior">Interior Services</a></li>
                                                    <li><a href="concierge">Concierge Services </a></li>
                                                </ul>
                                            </li>
                                           
                                            <li className={({isActive}) => isActive ?  "current" : ""}>
                                                <a href="contact">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
     );
}
 
export default Header;