import Header from "../components/Header";
import ServicesLayout from "../Layout/ServicesLayout";


const AviationPage = () => {
    return ( 
        <>
        <Header />
        <section className="page-header">
            <div className="page-header-bg" style={{backgroundImage:'url("assets/images/avidan/slider1.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Aviation</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li><a href="services.html">Services</a></li>
                        <li><span>/</span></li>
                        <li>Aviation</li>
                    </ul>
                </div>
            </div>
        </section>
        <ServicesLayout>
            <div className="col-xl-8 col-lg-7">
                        <div className="service-details__right">
                            <div className="service-details__content-box">
                                <div className="service-details__img">
                                    <img src="assets/images/avidan/slider1.jpeg" alt="" />
                                </div>
                                <h3 className="service-details__title">Aviation</h3>
                                <p className="service-details__text-1">Avidan is a sales representative and maintenance partner of OEM for flight
                                    simulators in USA, Canada and Europe. Are you looking for a partner to
                                    procure flight and marine simulators, and to help yourproject take-off? No
                                    need to look further.<br /></p>
                                <div className="service-details__quote">
                                    <p className="service-details__quote-text">Whether you require simple components or more complex, multi-component
                                        spare parts, and deliver high-quality spare parts on demand and your location.</p>
                                </div>
                          
                         
                            <div className="service-details__faq">
                                <div className="accrodion-grp" data-grp-name="faq-one-accrodion">
                                    <div className="accrodion">
                                        <div className="accrodion-title">
                                            <h4>Knowledgeable Sales Team</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Our staff has over 10 combined years of
                                                    experience selling aircraft parts. Any question or concernyou might have can be
                                                    easily managed by our friendly and knowledgeable team.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accrodion active">
                                        <div className="accrodion-title">
                                            <h4>Immediate Processing</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>As soon as your order is placed, we immediately
                                                    process all items and prepare your order for shipping. If there are any issues, we
                                                    will contact you right away to find a solution that meets your expectations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accrodion last-chiled">
                                        <div className="accrodion-title">
                                            <h4>Follow-up & Support</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Once you’ve received your part, we will be there to
                                                    provideany support or help you might need. We’ll do whatever is necessary to
                                                    help you find success.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="service-details__title mt-4">Airport Automation</h4>
                                <p className="service-details__text-1">Avidan Support Limited can help to develop innovative solutions which improve existing systems to perform safely and efficiently at the airport.
                                 Building Integration System is a Software solution which enables management level interface with different sub-systems in the Airport like Fire Alarm, Security & Access Control System, 
                                 Building Management, Lighting Control & Monitoring System, Power Management Units, Uninterrupted power Supply, Emergency Central Battery System, Management Information Systems, 
                                 Baggage Handling System, Airfield lighting and Integrated Aircraft Stand System.
</p>

                                    <h4 className="service-details__title mt-4">Aircraft Acquisition</h4>
                                    <p className="service-details__text-1">
                                        Whether you are a first-time buyer, looking to upgrade your existing aircraft or
                                        adding to your growing fleet, we can assist in the full acquisition process.<br />

                                        <b>Selling</b><br />  

                                        Selling: Selling aircraft takes an experience, knowledgeable, and professional
                                        representative who knows the aviation market (competition and comparable sales
                                        history) and can provide you with a realistic understanding of valuations and
                                        expectations.
                                        We represent serious sellers with professional marketing and advertising necessary
                                        to bring buyers to your plane. We know what buyers are looking for and will position
                                        your aircraft to command “A-List” attention. Our team assured you of getting the
                                        best price for your aircraft.
                                        • Avidan Support will be your ally and counsel in a very challenging marketplace

                                        Contact: sales@avidansupport.com
                                    </p>
                        </div>
                    </div>
            </div>
        </ServicesLayout>
           
        </>
     );
};
 
export default AviationPage;