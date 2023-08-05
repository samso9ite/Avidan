import Header from "../components/Header";

const Contact = () => {
    return ( 
        <>
            <Header/>
            <section className="page-header">
            <div className="page-header-bg" style={{backgroundImage: 'url("assets/images/avidan/slider1.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Contact us</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="contact-page">
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">contact us</span>
                    <h2 className="section-title__title">Feel free to get in touch <br /> with Avidan Support Ltd</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                        <div className="contact-page__single">
                            <div className="contact-page__title-box">
                                <div className="contact-page__title">
                                    <span>know</span>
                                    <h3>About us</h3>
                                </div>
                                <div className="contact-page__icon">
                                    <span className="icon-flight-1"></span>
                                </div>
                            </div>
                            <p className="contact-page__text">We focus on day-to-day supplies of equipments for aviation & maritime</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="contact-page__single">
                            <div className="contact-page__title-box">
                                <div className="contact-page__title">
                                    <span>write</span>
                                    <h3>Send email</h3>
                                </div>
                                <div className="contact-page__icon">
                                    <span className="icon-envelope-back"></span>
                                </div>
                            </div>
                            <p className="contact-page__text">
                                <a href="mailto:needhelp@company.com">info@avidansupport.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="contact-page__single">
                            <div className="contact-page__title-box">
                                <div className="contact-page__title">
                                    <span>book</span>
                                    <h3>Call now</h3>
                                </div>
                                <div className="contact-page__icon contact-page__icon--last">
                                    <span className="icon-call"></span>
                                </div>
                            </div>
                            <p className="contact-page__text">
                                <a href="tel:2348023060791">+234 802 3060 791</a>
                                <a href="tel:447984340511">+447 9843 40511</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-one">
            <div className="container">
                <div className="contact-one__form-box">
                    <form action="https://jetly-html.vercel.app/main-html/assets/inc/sendemail.php" className="contact-one__form contact-form-validated"
                        novalidate="novalidate">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="contact-form__input-box">
                                    <input type="text" placeholder="Your name" name="name" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-form__input-box">
                                    <input type="email" placeholder="Email address" name="email" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-form__input-box">
                                    <input type="text" placeholder="Phone number" name="phone" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-form__input-box">
                                    <input type="text" placeholder="Subject" name="subject" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-form__input-box text-message-box">
                                    <textarea name="message" placeholder="Write message"></textarea>
                                </div>
                                <div className="contact-form__btn-box">
                                    <button type="submit" className="thm-btn contact-form__btn">Send a message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
     <section className="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63424.98051780159!2d3.3180680506229216!3d6.513927876063138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDomestic%20Wing%2C%20Murtala%20Muhammed%20Airport%20Ikeja%2C%20Lagos%20.Nigeria!5e0!3m2!1sen!2sng!4v1691089017319!5m2!1sen!2sng" width="600" height="450" style={{border:0, allowfullscreen:"" ,   className:"google-map__one"}}></iframe>
        </section>
        </>
     );
}
 
export default Contact;