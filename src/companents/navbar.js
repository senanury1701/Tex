import React, { useState } from 'react';
import './MyNavbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function MyNavbar() {
  const [nav_class,setNavClass]=useState("click-bar unclicked");
  const [menu_class,setMenuClass]=useState("menu unvisible");
  const [isMenuClicked,setIsMenuClicked]=useState("true");

  const updateMenu=() =>{
    if(!isMenuClicked){
      setNavClass("click-bar clicked");
      setMenuClass("menu visible");
    }else{
      setNavClass("click-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  }


  return (
    
      <nav className='shadow'>
        <div className='bg-darkblue w-100 ' style={{height:"25px"}}>
          <div className='container d-flex justify-content-lg-between justify-content-center'>
            <div >
              <ul className='d-flex '>
                <li className='list-group-item mx-2'>
                  <a className='text-decoration-none text-white' href="#">Hakkimizda</a></li>
                <li className='list-group-item mx-2'>
                  <a className='text-decoration-none text-white' href="#">Kariyer</a></li>
                <li className='list-group-item mx-2'>
                  <a className='text-decoration-none text-white' href="#">Bayi ve Is ortakligi</a></li>
                <li className='list-group-item mx-2'>
                  <a className='text-decoration-none text-white' href="#">Blog</a></li>
              </ul>              
            </div>
              <div className='d-none d-lg-flex '>
                <ul className='d-flex' >
                  <li className='list-group-item mx-2 '>
                    <a className='text-decoration-none text-white' href="#">Giris yap</a></li>
                  <li className='list-group-item mx-2 '>
                    <a className='text-decoration-none text-white' href="/register">Kayit ol</a></li>            
                </ul>                
              </div>
          </div>
        </div>    
        <div className='container-fluid  bg-white'>
          <div className='container d-flex  justify-content-between bg-white'>
              <a href="/"><img  style={{height:"100px"}} src="https://cdn.vectorstock.com/i/preview-1x/15/78/tex-letter-logo-design-on-white-background-vector-44741578.jpg" alt="Logo" /></a>   
            <div className='d-none d-lg-flex  mt-4'>
              <ul className='d-flex '>
                <li className='list-group-item mx-3 mt-3'>
                  <a className='text-black text-decoration-none dropdown-toggle' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"  aria-controls="offcanvasTop " >Özellikler </a>
                  <div className="line"></div>

                  <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop"  aria-labelledby="offcanvasTopLabel" data-bs-backdrop="true">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasTopLabel"></h5>
                    </div>
                    <div className="offcanvas-body  ">
                    <div className='mt-2 d-flex container '>
                      <ul className='d-flex' >
                      <li className='list-group-item p-1 w-25'>
                      <div className="card text-center my-bg-blue" style={{height:"300px"}}>
                        <div className="card-body ">
                          <h4 className="card-title">Ücretsiz <br /> Deneyin</h4>
                          <p className="card-text">TEX'i 12 ay boyunca  hiçbir ücret  ödemeden deneyin!.</p>
                          
                        </div> 
                        <a className='myBtn mb-4 m-auto' href="/register">Ucretsiz Dene!</a>
                      </div>                         
                      </li>
                      <li className='list-group-item p-1 w-25'>
                      <div className="card text-center my-bg-blue" style={{height:"300px"}}>
                        <div className="card-body">
                            <h4 className="card-title">İletişim <br/>Formu</h4>
                            <p className="card-text ">Sorularınız ve talepleriniz için bilgi talebi oluşturarak bize ulaşın.</p>
                        </div>
                        <a className=' myBtn mb-4 m-auto' href="/communication">iletisime Gec!</a>
                      </div>
                      </li>
                      <li>
                        <div class="list-group ">
                          <h6  class="list-group-item b-none " >
                            Ana Özellikler
                          </h6>
                          <a href="#" class="list-group-item list-group-item-action b-none"> Fatura Takibi</a>
                          <a href="#" class="list-group-item list-group-item-action b-none"> Gelir-Gider Hesabi</a>
                          <a href="#" class="list-group-item list-group-item-action b-none"> Cari Hesap Yönetimi</a>
                          <a href="#" class="list-group-item list-group-item-action b-none"> Stok Yönetimi</a>
                          <a href="#" class="list-group-item list-group-item-action b-none"> Ürün ve Hizmet Yönetimi</a>
                          <a href="#" class="list-group-item list-group-item-action b-none"> Finansal Raporlama</a>
                        </div>                        
                      </li>
                      <li>
                        <div class="list-group ">
                          <h6  class="list-group-item b-none "><br /></h6>
                          <a href="#" class="list-group-item list-group-item-action b-none">Depo Yönetimi </a>
                          <a href="#" class="list-group-item list-group-item-action b-none">Teklif Yönetimi </a>
                          <a href="#" class="list-group-item list-group-item-action b-none">Satis Yönetimi </a>
                          <a href="#" class="list-group-item list-group-item-action b-none">Calisan Yönetimi </a>
                          <a href="#" class="list-group-item list-group-item-action b-none">Dövizli Kasa Yönetimi </a>
                          
                        </div>                        
                      </li>
                      <li>
                        <div class="list-group ">
                          <h6  class="list-group-item b-none ">Cok Yakinda</h6>
                          <a href="#" class="list-group-item list-group-item-action b-none">E-invoice </a>
                          <a href="#" class="list-group-item list-group-item-action b-none">E-ihracat Fatura</a>
                          <a href="#" class="list-group-item list-group-item-action b-none">E-Fatura ice Aktarma </a>
                          <a href="#" class="list-group-item list-group-item-action b-none">Bankalar Entegrasyonu </a>
                          <a href="#" class="list-group-item list-group-item-action b-none">Cekler </a>
                        </div>                        
                      </li>
                      <li>
                        <div class="list-group ">
                          <h6  class="list-group-item b-none ">Entegrasyon</h6>
                          <a href="#" class="list-group-item list-group-item-action b-none">E-Fatura </a>
                          <a href="#" class="list-group-item list-group-item-action b-none ">E-Arsiv</a>
                          <a href="#" class="list-group-item list-group-item-action b-none">E-irsaliye </a>
                          <a href="#" class="list-group-item list-group-item-action b-none">E-Adisyon </a>

                        </div>                        
                      </li>
                      </ul>  
                    </div>                      
                    </div>
                    
                  </div>
                </li>
                <li className='list-group-item mx-3 mt-3 '><a className='text-black text-decoration-none' href="#"> Fiyatlandirma</a><div className="line"></div></li>
                <li className='list-group-item mx-3 mt-3'><a className='text-black text-decoration-none' href="#"> Kampanyalar</a><div className="line"></div></li>
                <li className='list-group-item mx-3 mt-3'><a className='text-black text-decoration-none' href="#">Destek Merkezi</a><div className="line"></div></li>
              </ul>
            </div>
            
            <div className=' align-items-center justify-content-between navbar-expand-lg d-flex'>
              <a href='/register' className='myBtn mx-2'>Ucretsiz Dene</a>
              <div className='nav_menu d-lg-none' onClick={updateMenu}>
                  <div className={nav_class}></div>
                  <div className={nav_class}></div>
                  <div className={nav_class}></div>
              </div>
              <div className='d-lg-none'>
                <div className={menu_class}>
                  <div className='container text-center' style={{marginTop:"150px"}}>
                    <ul className='m-3'>
                      <li className='list-group-item m-3 '><a className='text-decoration-none text-black fs-3' href="/">Anasayfa</a></li>
                      <li className='list-group-item m-3'><a className='text-decoration-none text-black fs-3' href="#">Kampanyalar</a></li>
                      <li className='list-group-item m-3'><a className='text-decoration-none text-black fs-3' href="#">Fiyatlandirma</a></li>
                    </ul> 
                    <ul className='d-flex' >
                      <li className='list-group-item p-1 w-50'>
                      <div className="card text-center my-bg-blue" style={{height:"300px"}}>
                        <div className="card-body ">
                          <h4 className="card-title">Ücretsiz <br /> Deneyin</h4>
                          <p className="card-text  ">TEX'i 12 ay boyunca  hiçbir ücret  ödemeden deneyin!.</p>
                        </div> 
                        <a className='myBtn mb-4 m-auto' href="/register">Ucretsiz Dene!</a>
                      </div>                         
                      </li>
                      <li className='list-group-item p-1 w-50'>
                      <div className="card text-center my-bg-blue" style={{height:"300px"}}>
                        <div className="card-body">
                            <h4 className="card-title">İletişim <br/>Formu</h4>
                            <p className="card-text ">Sorularınız ve talepleriniz için bilgi talebi oluşturarak bize ulaşın.</p>
                        </div>
                        <a className=' myBtn mb-4 m-auto' href="#">iletisime Gec!</a>
                      </div>
                      </li>
                    </ul>                   
                  </div>
                </div>                  
              </div>            
            </div>
          </div>
        </div>    

      </nav>
    
  );
}

export default MyNavbar;
