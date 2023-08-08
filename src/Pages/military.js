import Header from "../components/Header";
import ServicesLayout from "../Layout/ServicesLayout";

const MilitaryPage = () => {
    return ( 
        <>
        <Header />
        <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage:'url("assets/images/avidan/slider1.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Military Equipment</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li><a href="services.html">Services</a></li>
                        <li><span>/</span></li>
                        <li>Military Equipment</li>
                    </ul>
                </div>
            </div>
        </section>
        <ServicesLayout>                
        <div class="col-xl-8 col-lg-7">
            <div class="service-details__right">
                    <div class="service-details__content-box">
                        <div class="service-details__img">
                            <img src="assets/images/avidan/military.jpeg" alt="" />
                        </div>
                        <h3 class="service-details__title">Military Equipment</h3>
                        <p class="service-details__text-1">We are professional supplier of complete series of military products and Police equipment for more than
                            3 years. As a registered Contractor with Nigeria Army, Nigeria Airforce, Nigeria Navy and Nigeria
                            Defence HQ, among other equipment are, military garments, backpack, vest, footwear, bulletproof
                            items, parachute, military flight and maritime simulations and so on.
                            Our main business is working with government agencies, by bidding the tender or direct purchasing.
                        </p>
                        
                </div>
            </div>
        </div>
        </ServicesLayout>  
        </>
     );
}
 
export default MilitaryPage;