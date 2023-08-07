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
                    <h2>Supply of aviation and maritime equipment</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li><a href="services.html">Services</a></li>
                        <li><span>/</span></li>
                        <li>Supply of aviation and maritime equipment</li>
                    </ul>
                </div>
            </div>
        </section>
        <ServicesLayout>                
        <div class="col-xl-8 col-lg-7">
                        <div class="service-details__right">
                            <div class="service-details__content-box">
                                <div class="service-details__img">
                                    <img src="assets/images/avidan/supply.png" alt="" />
                                </div>
                                <h3 class="service-details__title">Supply of Aviation and Maritime Equipment</h3>
                                <p class="service-details__text-1">Avidan is a sales representative and maintenance partner of OEM for flight &amp;
                                    Maritime simulations in the Europe, Canada and United States.<br />
                                    All the products are representing are compliant with the most widespread standards in aviation, such as those of the EASA, FAA, and TC (Transport Canada)</p>
                                
                        </div>
                    </div>
                </div>
        </ServicesLayout>  
        </>
     );
}
 
export default Interior;