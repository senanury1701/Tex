import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './pagecss.css'; 
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';


function Home(){
    useEffect(() => {
        AOS.init();
      }, []);
    return (
      <section className='bg-lightblue'>
            <div className='container py-5 d-flex' >
                <div  data-aos="fade-right" data-aos-duration="2000">
                    <h6>TEX ÖN MUHASEBE PROGRAMI</h6><br/>
                    <h4>Binlerce KOBİ’nin tercihi TEX ile zorunlu e-fatura geçişinizi avantaja çevirin.</h4><br />
                    <p className='mb-5'>Üstelik 12 Ay boyunca ücretsiz. İlk kayıtta kredi kartına gerek yok. İstediğiniz zaman hesabınızı kapatabilirsiniz. Hemen kayıt ol. TEX'in tüm özelliklerinden yararlan!</p>
                    <a className='my-btn' href="/register">Ucretsiz Dene!</a>
                      
                </div>
                <div className='d-none d-lg-flex ' data-aos="fade-left" data-aos-duration="2000">
                    <img style={{height:"300px"}} src="https://img.freepik.com/free-psd/couple-gesturing-together_23-2150198949.jpg?w=1380&t=st=1693918180~exp=1693918780~hmac=ee2878881399cb01495786b52a9f2f0f022d7328c59e00673f7eed3a16e78639" alt="" />
                </div>

            </div>
            <div className="container bg-darkblue my-4 shadow  d-lg-flex" data-aos="zoom-in" data-aos-duration="2000">
                <div className='m-lg-5 text-white my-div'>
                    <h6 className='pt-3 pt-lg-5 text-info fw-bold'>12 AY TAMAMEN ÜCRETSIZ</h6>
                    <h4 className='mt-lg-5'>İşinizi Büyütürken TEX Yanınızda</h4>
                    <p>Startup, KOBİ veya şahıs şirketinizin ön muhasebe süreçleri, hiç olmadığı kadar kolay. Finansal operasyonlarınızı hızlandıracak birçok özellik web tabanlı ön muhasebe programı TEX’te! TEX'i 12 ay boyunca hiçbir ücret ödemeden deneyin!</p>
                    <ul className='list-group'>
                        <li className='list-group'>✓ Kolay kullanım</li>
                        <li className='list-group'>✓ Dilediğiniz yerden erişim</li>
                        <li className='list-group'>✓ İşletmeniz için zaman ve maliyet tasarrufu</li>
                        <li className='list-group'>✓ Finansal Takip</li>
                        <li className='list-group'>✓ e-Fatura / e-Arşiv</li>
                        <li className='list-group'>✓ Gelir-Gider Takibi</li>
                        <li className='list-group'>✓ Sipariş Yönetimi</li>
                        <li className='list-group'>✓ Dilediğiniz yerden erişim</li>
                        <li className='list-group'>✓ İşletmeniz için zaman ve maliyet tasarrufu</li>
                    </ul>
                </div>   
                <div className="container text-center my-5" >
                    <div className="row row-cols-1 row-cols-sm-2 ">
                        <div className="col my-3" data-aos="flip-up"><div className="card text-center " style={{height:"300px"}}>
                        <div className="card-body ">
                          <h4 className="card-title">e-Fatura / e-Arşiv</h4>
                          <p className="card-text  ">e-Fatura entegrasyonu, kâğıt fatura kullanımını azaltarak işletmelere kâğıt, posta, depolama ve arşivleme maliyetlerinden tasarruf sağlar.</p>
                        </div> 
                        <a className='my-btn mb-4 m-auto' href="#">Incele!</a>
                      </div> </div>
                        <div className="col my-3" data-aos="flip-up"><div className="card text-center " style={{height:"300px"}}>
                        <div className="card-body ">
                          <h4 className="card-title">Sipariş Yönetimi</h4>
                          <p className="card-text  ">Tex anlık stok takibi, ürün ve hizmetlerin gerçek zamanlı stok takibini sağlar.</p>
                        </div> 
                        <a className='my-btn mb-4 m-auto' href="#">Incele!</a>
                      </div> </div>
                        <div className="col my-3" data-aos="flip-up"><div className="card text-center " style={{height:"300px"}}>
                        <div className="card-body ">
                          <h4 className="card-title">Finansal Takip</h4>
                          <p className="card-text  ">Kasa yönetimi, nakit varlıklarını daha iyi yöneterek, finansal verimliliği artırır.</p>
                        </div> 
                        <a className='my-btn mb-4 m-auto' href="#">Incele!</a>
                      </div> </div>
                        <div className="col my-3" data-aos="flip-up">
                          <div className="card text-center " style={{height:"300px"}}>
                            <div className="card-body ">
                          <h4 className="card-title">Gelir-Gider Takibi</h4>
                          <p className="card-text  ">Gelir-Gider Takibi, işletmenin gelir ve giderlerinin takibi için manuel işlemlerin yerini otomatik işlemler alır.</p>
                            </div> 
                            <a className='my-btn mb-4 m-auto' href="#">Incele!</a>
                          </div> 
                        </div>
                    </div>
                </div>
        </div>
        <div className="container-fluid bg-white">
          <div className='container '>
            <div className="row ">
              <div className="col-12 col-md-6  m-auto">
              <h6 className='pt-3 pt-lg-5 text-info fw-bold'>12 AY TAMAMEN ÜCRETSIZ</h6>
                <h5>E-Fatura entegrasyonu</h5>
                <p>E-Fatura'ya geçiş süreci, birçok işletme için zorlu ve zaman alıcı bir süreç olabilir. Ancak TEX ile bu süreci sizin adınıza takip ederek işinizi kolaylaştırıyoruz. E-Fatura'ya geçiş yaparak, zamandan ve maliyetten tasarruf edebilir, dijital dönüşümün avantajlarından faydalanabilirsiniz. TEX'in size sağladığı bu ayrıcalıklarla işinizi daha verimli hale getirin.</p>
              </div>
              <div className="col-12 col-md-6 m-auto " data-aos="fade-left" data-aos-duration="2000">
                <img className='img-fluid'  src="https://WEGS.com.tr/assets/images/mockup.png" alt="araba" />
              </div>
            </div>
          </div>

        </div>
        <div className='container-fluid bg-darkblue'>
          <div className='container bg-darkblue'>
            <div className='row'>
              <div className="col-12 col-md-6 m-auto" data-aos="fade-right" data-aos-duration="2000">
                <img className='img-fluid'  src="https://WEGS.com.tr/assets/images/mockup2.png" alt="araba" />
              </div>
              <div className="col-12 col-md-6 text-white m-auto">
                <h6 className='pt-3 pt-lg-5 text-info fw-bold'>12 AY TAMAMEN ÜCRETSIZ</h6>
                <h5>Gelir-Gider Takibi</h5>
                <p>E-Fatura'ya geçiş süreci, birçok işletme için zorlu ve zaman alıcı bir süreç olabilir. Ancak TEX ile bu süreci sizin adınıza takip ederek işinizi kolaylaştırıyoruz. E-Fatura'ya geçiş yaparak, zamandan ve maliyetten tasarruf edebilir, dijital dönüşümün avantajlarından faydalanabilirsiniz. TEX'in size sağladığı bu ayrıcalıklarla işinizi daha verimli hale getirin</p>
                <ul className='list-group'>
                  <li className='list-group'>✓ Hızlı ve verimli işlem</li>
                  <li className='list-group'>✓ Maliyet tasarrufu</li>
                  <li className='list-group'>✓ İşletmeniz için zaman ve maliyet tasarrufu</li>                       
                </ul>
              </div>              


            </div>            
          </div>
        </div>       
      </section>

        
    )

}export default Home