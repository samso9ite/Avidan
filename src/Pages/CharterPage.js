import Header from "../components/Header";
import ServicesLayout from "../Layout/ServicesLayout";

const CharterPage = () => {
    return ( 
        <>
        <Header />
        <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage:'url("assets/images/avidan/slider1.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Charters</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li><a href="services.html">Services</a></li>
                        <li><span>/</span></li>
                        <li> Charters</li>
                    </ul>
                </div>
            </div>
        </section>
        <ServicesLayout>
        <div class="col-xl-8 col-lg-7">
                        <div class="service-details__right">
                            <div class="service-details__content-box">
                                <div class="service-details__img">
                                    <img src="assets/images/avidan/private-jet.jpeg" alt="" />
                                </div>
                                <h3 class="service-details__title">Charters</h3>
                                <p class="service-details__text-1">Avidan Support arranges on-demand private jet charter worldwide through a
                                    preferred network of operators, giving you the freedom to select the exact
                                    make and model for each trip.
                                    Let us know what size aircraft you want, location, when and where you need it
                                    and our team of highly experienced charter flight specialist will assure
                                    favourable market pricing and aircraft availability.<br /></p>
                                <div class="service-details__quote">
                                    <p class="service-details__quote-text">Avidan Support brokerage benefits and services include:<br />
                                        • Ready to serve you 24/7, 365 days a year<br />
                                        • Real time charter quotes<br />
                                        • Preferred network committed to passenger safety<br />
                                        • Any size, make and model of aircraft<br />
                                        • Leisure, Executive and Collegiate travel, plus Corporate Shuttles<br />
                                        • Round-trip pricing discounts<br />
                                        • Empty leg trip discounts</p>
                                </div>
                              </div>
                         
                            <div class="service-details__faq">
                                <div class="accrodion-grp" data-grp-name="faq-one-accrodion">
                                    <div class="accrodion">
                                        <div class="accrodion-title">
                                            <h4>Vacations</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>The majority of airlines function within a hub and spoke framework, necessitating layovers at
                                                     major airports before reaching your ultimate stop. However, by arranging a private jet charter, 
                                                     you gain the advantage of flying straight to your desired Greek island or the local airport near your preferred skiing spot.
                                                      You retain the liberty to select your departure time,
                                                     guaranteeing a tranquil vacation experience. Moreover, with ample baggage allowances, the task of packing becomes notably simpler.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accrodion active">
                                        <div class="accrodion-title">
                                            <h4>Business Trips</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>Opting for the convenience of luxurious jet travel not only preserves your time and reduces stress but also offers a 
                                                    secluded environment for conducting business affairs. Even if you choose First Class on reputable commercial airlines, your conversations may not be entirely private. Moreover, commercial flights adhere strictly to schedules, as their name implies. In contrast, selecting a private jet empowers you to shape your own timetable, thus enabling greater 
                                                    productivity within a single workday. Once your meeting concludes, transitioning to the jet allows you to swiftly embark on your next destination.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accrodion last-chiled">
                                        <div class="accrodion-title">
                                            <h4>Cargo</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>There are a few cases where even an overnight
                                                    delivery from traditional courier is not fast enough. If
                                                   you need anything from a single document or a
                                                    number of boxes delivered immediately, we can do so
                                                    at a moment’s notice.</p>
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
 
export default CharterPage;