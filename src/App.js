import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';

import './assets/css/tailwind.css';
import './assets/css/icons.css';

import Index from "./pages/index.js";
import PropertyDetail from "./pages/property-detail";
import Aboutus from "./pages/aboutus";
import Page404 from "./pages/404";
import Contact from "./pages/contact";
import Grid from "./pages/CreateAnnuncie/grid";
import Faq from "./pages/faq";
import ScrollToTop from './component/Scroll-top';
import Depoiment from "./pages/depoiment";
import Favorites from "./pages/favorites";
import WhatsappButton from "./component/WhatsappButton";
import CreateAnnunciate from "./pages/CreateAnnuncie";
import Obrigado from "./pages/Obrigado/index.jsx";

function App() {

  // const clearCacheData = () => {
  //   caches.keys().then(function (names) {
  //     names.forEach(function (name) {
  //       caches.delete(name);
  //     });
  //   });
  // };

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('light');
  }, []);


  return (
      <BrowserRouter>
        <ScrollToTop />
        <WhatsappButton />
        <Routes >
          <Route path="/" element={<Index />} />
          <Route path="/imovel/:id" element={<PropertyDetail />} />
          <Route path="/sobre-nos" element={<Aboutus />} />
          <Route path="/imoveis" element={<Grid />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/fale-conosco" element={<Contact />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/depoimento" element={<Depoiment />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/anunciar-imovel" element={<CreateAnnunciate />} />
          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>
      </BrowserRouter >
  )

}
export default App;
