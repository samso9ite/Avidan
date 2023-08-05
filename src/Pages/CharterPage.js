import Header from "../components/Header";
import ServicesLayout from "../Layout/ServicesLayout";

const CharterPage = () => {
    return ( 
        <>
        <Header />
        <section className="page-header">
            <div className="page-header-bg" style={{backgroundImage: 'url("assets/images/backgrounds/page-header-bg.jpg")'}}>
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
                                                <p>Most airlines operate in a hub and spoke
                                                    system, which means you will almost always
                                                    have to transit through a major airport to reach
                                                    your final destination. By chartering a private
                                                    jet you are able to fly directly to the Greek
                                                    island of your choice or to the local airport by
                                                    your favourite skiing location.
                                                    You choose the departure time ensuring a stress
                                                    free vacation. Also, with generous baggage
                                                    allowances packing becomes that much easier.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accrodion active">
                                        <div class="accrodion-title">
                                            <h4>Business Trips</h4>
                                        </div>
                                        <div class="accrodion-content">
                                            <div class="inner">
                                                <p>While travelling in the comfort of a luxury jet can
                                                    save you valuable time and stress, it is also a private
                                                    place to do business. Even when travelling in First
                                                    Class on leading airlines you are not safe from prying
                                                    ears.
                                                    Also, scheduled airlines are exactly as the name
                                                    suggests – scheduled. By travelling with a private jet
                                                    you can set your own agenda and accomplish more in
                                                    a working day. When you are done with your
                                                    meeting, you can simply jump on the jet and head
                                                    towards your next destination.</p>
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
                                                    delivery from DHL or FedEx is not fast enough. If
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