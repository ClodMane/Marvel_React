import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';


import './style/style.scss';

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    

  //СТАРАЯ КОМАНДА В 17 ВЕРСИИ РЕАКТА
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

