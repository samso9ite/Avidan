import Header from "../components/Header";
import ServicesLayout from "../Layout/ServicesLayout";

const LeasingPage = () => {
    return ( 
        <>
        <Header />
        <section className="page-header">
            <div className="page-header-bg" style={{backgroundImage: 'url("assets/images/backgrounds/page-header-bg.jpg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Aircraft Leasing</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li><a href="services.html">Services</a></li>
                        <li><span>/</span></li>
                        <li>Aircraft Leasing</li>
                    </ul>
                </div>
            </div>
        </section>
        <ServicesLayout>
        <div class="col-xl-8 col-lg-7">
            <div class="service-details__right">
                            <div class="service-details__content-box">
                                <div class="service-details__img">
                                    <img src="assets/images/avidan/slider4.jpeg" alt="" />
                                </div>
                                <h3 class="service-details__title">Aircraft Leasing</h3>
                                <p class="service-details__text-1">The Avidan Support ACMI/Aircraft Leasing team has considerable
                                    aircraft leasing management experience. We are always in in a position
                                    to give our clients the best service.
                                    <br /><br />
                                    
                                    As a broker, Avidan Support can provide aircraft anywhere in the world
                                    to meet short, medium and long term requirements. There are a
                                    number of options available to you which include:
                                    <br />
                                    
                                    • Dry leasing (no crew)<br />
                                    • Damp leasing (flight deck crew)<br />
                                    • Wet leasing (full or partial compliment of cabin crew)<br />
                                    Rent aircraft, provides an
                                    • aircraft without crew,
                                    • ground staff, fuel, or
                                    • general flight
                                    • expenses etc. You have operational
                                    • control of the flights.
                                    • Keep the aircraft with you on trips.
                                </p>
                                <div class="service-details__quote">
                                    <p class="service-details__quote-text">Rent aircraft, provides an
                                     aircraft without crew,
                                     ground staff, fuel, or
                                     general flight
                                     expenses etc. You have operational
                                     control of the flights.
                                     Keep the aircraft with you on trips.</p>
                                </div>
                              
                          

                            <h4 class="service-details__title mt-4">WET / ACMI LEASE REQUEST</h4>
                                <p class="service-details__text-1">Wet leasing an aircraft under an ACMI contract (aircraft, crew,
                                    maintenance and insurance) can help ensure you achieve the
                                    maximum in airline operational flexibility. When you want to
                                    add a new aircraft type to your fleet, or are planning an
                                    expansion of capacity or route structure, wet leasing can
                                    often be a highly effective solution.</p>
                        </div>
                    </div>
                </div>
        </ServicesLayout>  
        </>
     );
}
 
export default LeasingPage;