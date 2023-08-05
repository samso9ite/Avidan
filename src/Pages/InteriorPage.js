import Header from "../components/Header";
import ServicesLayout from "../Layout/ServicesLayout";

const Interior = () => {
    return ( 
        <>
        <Header />
        <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage:'url("assets/images/avidan/slider1.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Interior Services</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li><a href="services.html">Services</a></li>
                        <li><span>/</span></li>
                        <li>Interior Services</li>
                    </ul>
                </div>
            </div>
        </section>
        <ServicesLayout>
        <div class="col-xl-8 col-lg-7">
                        <div class="service-details__right">
                            <div class="service-details__content-box">
                                <div class="service-details__img">
                                    <img src="assets/images/avidan/interiorJet.webp" alt="" />
                                </div>
                                <h3 class="service-details__title">Interior Services</h3>
                                <p class="service-details__text-1">Avidan Support offers full interior detail cleaning<br /></p>
                              
                            <div class="service-details__faq mt-5">
                                <div class="accrodion-grp" data-grp-name="faq-one-accrodion">
                                    <div class="accrodion">
                                        <div class="accrodion-title">
                                            <h4>Cockpit</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>Clean all Instrument Panels and
                                                Screens<br />
                                                • Clean all Windows and Sun Visors<br />
                                                • Vacuum all Seats and Floors<br />
                                                • Sanitize all Oxygen Masks</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accrodion active">
                                        <div class="accrodion-title">
                                            <h4>Galley</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>
                                                    Clean & Disinfect Trash Bins<br />
                                                    – Clean Coffee Areas<br />
                                                    – Wipe & Polish<br />
                                                    Metal/Plastic/Wood/Formica<br />
                                                    – Spot Clean Stains & Vacuum Rug
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accrodion last-chiled">
                                        <div class="accrodion-title">
                                            <h4>Lavatory</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>
                                                    – Clean & Polish all <br />
                                                    Metal/Plastic/Wood/Formica<br />
                                                    – Clean Windows and Mirrors<br />
                                                    – Empty & Clean Trash Dispenser<br />
                                                    – Sanitize all Oxygen Masks
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </ServicesLayout>  
        </>
     );
}
 
export default Interior;