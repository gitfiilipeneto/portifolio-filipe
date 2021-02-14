import React from 'react';
import ReactDOM from 'react-dom';
import Hero from './components/heroSection'
import NavigationBar from './components/navBar';


ReactDOM.render(
  <React.StrictMode>
    <NavigationBar/>
    <Hero/>
  </React.StrictMode>,
  document.getElementById('root')
);

