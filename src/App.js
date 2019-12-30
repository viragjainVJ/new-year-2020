import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDown from '../src/components/CountDown';
import github from './icons/github.png';
import instagram1 from './icons/instagram1.png';
import linkedin from './icons/linkedin.png';
import mail from './icons/mail.png';
import twitter from './icons/twitter.png';
import code from './icons/programming.png';

function App() {
  const currentDate = new Date();
  const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Countdown</h2>
        <div>
            <a href="https://github.com/viragjainVJ" target="_blank">
              <img src={github} alt="github" className="profileIcon" />
            </a>
            <a href="https://www.linkedin.com/in/viragjainvj/" target="_blank">
              <img src={linkedin} alt="github" className="profileIcon" />
            </a>
            <a href="https://www.instagram.com/vjgentlestyle/" target="_blank">
              <img src={instagram1} alt="github" className="profileIcon" />
            </a>
            <a href="mailto:jain051994@gmail.com" target="_blank">
              <img src={mail} alt="github" className="profileIcon" />
            </a>
            <a href="https://twitter.com/viragjain_vj" target="_blank">
              <img src={twitter} alt="github" className="profileIcon" />
            </a>
        </div>
        <div>
            <a href="https://github.com/viragjainVJ/new-year-2020" target="_blank">
               <img src={code} alt="github" className="profileIcon" />
            </a>
        </div>
        <div          className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Virag Jain (VJ)
        </div>
      </header>
      <CountDown date={`${year}-01-01T00:00:00`} />
    </div>
  );
}

export default App;
