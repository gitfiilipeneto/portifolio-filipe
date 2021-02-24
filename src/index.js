import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/GobalStyles'
import NavigationBar from './components/navBar';
import ProjetoTeste from './components/projetoTeste';
import Hero from './components/heroSection'
import AboutMeSection from './components/aboutMe';




ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <NavigationBar/>
    <Hero/>
    {/* <ProjetoTeste/> */}
    {/* <AboutMeSection/> */}
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

