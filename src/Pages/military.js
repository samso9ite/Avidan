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
                        <p class="service-details__text-1">We are professional supplier of complete series of Military products and Police equipment for over three years, we have been a proficient provider of an extensive range of military products and police equipment. Being an authorized contractor for the Nigerian Army, Nigerian Airforce, Nigerian Navy, and Nigeria Defence HQ, we offer an array of equipment including military apparel, backpacks, vests, footwear, bulletproof items, parachutes, military flight and maritime simulations, and more.    
                        </p>
                        
                </div>
            </div>
        </div>
        </ServicesLayout>  
        </>
     );
}
 
export default MilitaryPage;