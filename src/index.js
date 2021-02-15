import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/heroSection'
import NavigationBar from './components/navBar';
import ProjetoTeste from './components/projetoTeste';


ReactDOM.render(
  <React.StrictMode>
    <NavigationBar/>
    {/* <Hero/> */}
    <ProjetoTeste/>
  </React.StrictMode>,
  document.getElementById('root')
);

