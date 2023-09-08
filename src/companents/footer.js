import React, { useState } from 'react';
import './MyNavbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Footer()
{
    return (
    <footer className="container-fluid p-3 py-5 text-center  my-bg-blue">
        <a href="#" target="_blank">
        </a><div className="container"><a href="#" target="_blank">
        </a><div className="row"><a href="#" target="_blank">
            </a><div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <div className=" mb-4 text-primary">ÖZELLİKLER</div>  
                <ul className="list-unstyled "><a href="#" target="_blank">
                </a>
                <li><a  href="#" target="_blank">
                    </a><a href="#" className="py-2 block text-decoration-none text-black ">Kolay Ürün Yönetimi</a>
                </li>
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">E-Fatura’ya Geçiş Kolaylığı</a>
                </li>
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">Muhasebe Entegrasyonları</a>
                </li>
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">Banka Entegrasyonları</a>
                </li>
            </ul>
        </div>
            <div className="col-12 col-lg-2 mb-4 mb-lg-0">
            <div className=" mb-4 text-primary">KURUMSAL </div>
                <ul className="list-unstyled features-list">
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">Hakkımızda</a>
                </li>
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">Kariyer</a>
                </li>
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">Bayi &amp; İş Ortaklığı</a>
                </li>
            </ul>
        </div>
            <div className="col-12 col-lg-2 mb-4 mb-lg-0">
            <div className=" mb-4 text-primary">DESTEK MERKEZİ</div>
                <ul className="list-unstyled ">
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">Sıkça Sorulan Sorular</a>
                </li>
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">İletişim Formu</a>
                </li>
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">Destek Talebi Oluştur</a>
                </li>

            </ul>
        </div>
            <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <div className=" mb-4 text-primary">ÖNEMLİ BAĞLANTILAR</div>
                <ul className="list-unstyled ">
                <li>
                    <a  href="#" className="py-2 block text-decoration-none text-black">Aydınlatma Metni</a>
                </li>
                <li>
                    <a  href="#" className="py-2 block text-decoration-none text-black">KVKK Politikası</a>
                </li>
                <li>
                    <a  href="#" className="py-2 block text-decoration-none text-black">Çerez Politikası</a>
                </li>
            </ul>
        </div>
            <div className="col-12 col-lg-2 mb-4 mb-lg-0">
            <div className="mb-3 text-primary">İLETİŞİM</div>
                <ul className="list-unstyled ">
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">05XX XXX XXXX</a>
                </li>
                <li>
                    <a href="#" className="py-2 block text-decoration-none text-black">DestekXXX@gmail.com</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </footer>
    );


} export default Footer;