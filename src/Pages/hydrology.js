import Header from "../components/Header";
import ServicesLayout from "../Layout/ServicesLayout";

const HydrologyPage = () => {
    return ( 
        <>
        <Header />
        <section className="page-header">
        <div className="page-header-bg" style={{backgroundImage:'url("assets/images/avidan/slider1.jpeg")'}}>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>Meteorology/Hydrology</h2>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index-2.html">Home</a></li>
                        <li><span>/</span></li>
                        <li><a href="services.html">Services</a></li>
                        <li><span>/</span></li>
                        <li>Meteorology/Hydrology</li>
                    </ul>
                </div>
            </div>
        </section>
        <ServicesLayout>                
        <div class="col-xl-8 col-lg-7">
            <div class="service-details__right">
                    <div class="service-details__content-box">
                        <div class="service-details__img">
                            <img src="assets/images/avidan/hydroMet.png" alt="" />
                        </div>
                        <h3 class="service-details__title">Meteorology/Hydrology</h3>
                        <p class="service-details__text-1">We sell, install, repair, maintain and inspect meteorological and various observation equipment,
                        and Observation, forecasting, processing, distribution, provision and explanation of weather and
                        disaster prevention information by provides meteorological, hydrological, and oceanographic
                        services in support.
                        
                        <br /><br />
                        We deliver superior customer outcomes by providing decision-makers with vital insights they trust by
                        providing a complete design through to manufacture and certification capability that are the OEM for
                        several products (LLWAS, AWOS, SADIS, ATIS/D-ATIS, SICAM, and IWS, etc.) in Meteorology and
                        Climatology, Road Weather, Aviation, Flood Warning, Flow and Discharge, Water Level, Water Quality,
                        Groundwater and Nutrient Monitoring.
                        <ul className="about-two__right-points list-unstyled">
                        <li>
                            <div className="icon">
                                <span className="icon-tick"></span>
                            </div>
                            <div className="text">
                                <h3>Agricultural </h3>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-tick"></span>
                            </div>
                            <div className="text">
                                <h3>Aviation</h3>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <span className="icon-tick"></span>
                            </div>
                            <div className="text">
                                <h3>Marine</h3>
                            </div>
                        </li>
                    </ul>   
                        </p>
                        
                </div>
            </div>
        </div>
        </ServicesLayout>  
        </>
     );
}
 
export default HydrologyPage;