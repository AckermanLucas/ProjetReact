import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Style.css';
import './components/css/bootstrap.min.css';
import './components/css/animate.min.css';
import './components/css/magnific-popup.css';
import './components/css/nice-select.css';
import './components/css/normalize.css';
import './components/css/owl-carousel.css';
import './components/css/responsive.css';
import './components/css/slicknav.min.css';
import './components/css/icofont.css';
//import './components/css/card_slider.css';
import 'font-awesome/css/font-awesome.css';
//import './components/css/cards.css';
//import './components/css/Partners.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//import "./components/css/design_carte.css";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

