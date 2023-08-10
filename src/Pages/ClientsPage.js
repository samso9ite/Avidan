import Header from "../components/Header";
import Footer from "../components/Footer";

const ClientsPage = () => {
    return ( 
        <>
            <section className="page-header">
                <div className="page-header-bg" style={{backgroundImage: 'url("assets/images/avidan/slider1.jpeg")'}}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>Our Clients</h2>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><span>/</span></li>
                            <li>Clients</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="team">
            <div class="container">
                <div class="section-title text-center">
                    <h2 class="section-title__title">Our Clients</h2>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/fma.png" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="">Federal Ministry Of Aviation</a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/faan.png" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="">Federal Airport Authority Of Nigeria</a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/NAMA.jpeg" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="#">Nigerian Airspace Management Agency </a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/ncat.png" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="">Nigerian College of Aviation Technology</a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>  
               
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/FEM.jpeg" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="">Federal Ministry of Enviroment </a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/niwa.jpeg" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="">National Inland Waterways Authority </a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/nihsa.jpeg" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="">Nigeria Hydrological Services Agency </a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>
                  
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/lwrb.jpeg" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="">Lower Niger River Basin Development Authority</a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="team__single">
                            <div class="team__single-inner">
                                <div class="team__img" style={{backgroundColor:'white'}}>
                                    <img src="assets/images/avidan/clients/NSDC.png" alt="" />
                                </div>
                                <div class="team__content">
                                    <h4 class="team__name"><a href="#">National Sugar Development Council </a></h4>
                                  </div>
                            </div>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
            </section>
            <Footer />
        </>
    );
}
 
export default ClientsPage;