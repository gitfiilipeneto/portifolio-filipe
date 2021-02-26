import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/GobalStyles'
import NavigationBar from './components/navBar';
import ProjetoTeste from './components/projetoTeste';
import Hero from './components/heroSection'
import AboutMeSection from './components/aboutMe';
import YouShallNotPass from './components/waitHere';
import GridFavTechs from './components/favTechsGrid';




ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <NavigationBar/>
    <Hero/>
    {/* <ProjetoTeste/> */}
    <AboutMeSection/>
    <YouShallNotPass/>
    <GridFavTechs/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

