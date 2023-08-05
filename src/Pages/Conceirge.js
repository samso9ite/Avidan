import Header from "../components/Header";
import ServicesLayout from "../Layout/ServicesLayout";

const Concierge = () => {
    return ( 
        <>
        <Header />
        <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage:'url("assets/images/avidan/slider1.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Concierge Services</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li><a href="services.html">Services</a></li>
                        <li><span>/</span></li>
                        <li>Concierge Services</li>
                    </ul>
                </div>
            </div>
        </section>
        <ServicesLayout>
            <div class="col-xl-8 col-lg-7">
                <div class="service-details__right">
                        <div class="service-details__content-box">
                            <div class="service-details__img">
                                <img src="assets/images/avidan/concierge.jpeg" alt="" />
                            </div>
                            <h3 class="service-details__title">Concierge Services</h3>
                            <p class="service-details__text-1">With superior hospitality and service,
                                Avidan Support is committed to
                                providing you with dedicated
                                professional support to make your stay
                                more enjoyable. From arrival to
                                departure we pledge the superior service
                                you expect and the extra comforts that
                                you might not.<br /></p>
                            <div class="service-details__quote">
                                <p class="service-details__quote-text">Airport co-ordination <br />
                                    • Over flight and Landing Permits <br />
                                    • Airport landing slot requests<br />
                                    • Fuel supply<br />
                                    • Crew Accommodation<br />
                                    • On-Site Rental Cars<br />
                                    • BMW Crew Car<br />
                                    • Phone call to us is all you need to ensure
                                    that your aircraft movements are
                                    professionally set-up and supported.</p>
                            </div>
                    
                    </div>
                </div>
            </div>
        </ServicesLayout>  
        </>
     );
}
 
export default Concierge;