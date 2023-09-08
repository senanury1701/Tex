import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './companents/navbar';
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Register from './pages/register';
import Footer from './companents/footer';


function App() {
  return (
    <>
    
      <div className='position-sticky top-0 z-3'>
      <MyNavbar></MyNavbar>      
      </div>
      <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register/>}></Route>

        
        
      </Routes>
    </BrowserRouter>       
      <div className=''>
      <Footer></Footer>      
      </div>
     
    </>


    
  );
}

export default App;
