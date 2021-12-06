import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './genel.css'
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';


ReactDOM.render(
  <SimpleReactLightbox>
    <App />
  </SimpleReactLightbox>,
  document.getElementById('root')
);
