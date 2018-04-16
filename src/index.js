import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';

const theme = {
	fontColor: '#ffffff',
  background: [
    '#000000',
    '#3772FF',
    '#DF2935',
    '#FF3200',
    '#FDCA40'
  ]
};


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App /> 
  </ThemeProvider>,
	document.getElementById('root')
);
registerServiceWorker();
