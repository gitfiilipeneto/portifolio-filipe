import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navBar';
import ProjetoTeste from './components/projetoTeste';
import Hero from './components/heroSection'
import GlobalStyle from './assets/GobalStyles'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <NavigationBar/>
    <Hero/>
    <ProjetoTeste/>
  </React.StrictMode>,
  document.getElementById('root')
);

