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
                        <p class="service-details__text-1">Our offerings encompass the sale, installation, repair, and maintenance of a wide range of meteorological and observation equipment. Additionally, we conduct thorough inspections of these instruments. We specialize in the entire spectrum of weather-related activities, including observation, forecasting, data processing, distribution, and the provision of comprehensive weather and disaster prevention information. Our services revolve around meteorological, hydrological, and oceanographic expertise, all aimed at providing robust support in these domains.
                        <br /><br />
                        We achieve exceptional customer results by furnishing essential, reliable insights to decision-makers. Our comprehensive services encompass the entire process from design and manufacturing to certification. As the original equipment manufacturer (OEM) for numerous products such as LLWAS, AWOS, SADIS, ATIS/D-ATIS, SICAM, and IWS, among others, we play a pivotal role in fields such as Meteorology and Climatology, Road Weather, Aviation, Flood Warning, Flow and Discharge, Water Level, Water Quality, Groundwater, and Nutrient Monitoring.
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