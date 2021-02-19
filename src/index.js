import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navBar';
import ProjetoTeste from './components/projetoTeste';
import Hero from './components/heroSection'
import GlobalStyle from './assets/GobalStyles'
import PersonalCard from './components/myIdCard'



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <NavigationBar/>
    <Hero/>
    <ProjetoTeste/>
    <PersonalCard/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

