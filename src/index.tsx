import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RsvpPage from './Pages/Rsvp';
import PageStyles from './Pages/page.module.css';
import MainHero from './Components/Hero/hero';
import backgroundImg from './images/background.png';

import './fonts/MrsSaintDelafield/MrsSaintDelafield-Regular.ttf';
import './fonts/meddon/Meddon.ttf';

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className={PageStyles.backgroundImage} style={{
      backgroundImage: `url(${backgroundImg}), none`
    }}>
    <MainHero/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="rsvp" element={<RsvpPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
