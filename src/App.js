import './App.css';
import * as GrIcons from "react-icons/gr"
import eric from './images/eric.jpg'
import { Document, Page } from 'react-pdf';

import resume from `/images/Eric Quach Resume.pdf`

function App() {
  return (
    <div className="home">
      <Documnet file={resume}>
        <Page pageNumber={(1)}></Page>
      </Documnet>
    </div>
  );
}

/*<div className="profile">
        <div className="left">
          <div>
            <img src={eric}></img>
          </div>
          <h1>Eric Quach</h1>
          <div className="title"><h3>Junior Front End Developer</h3></div>
          <h3>January 11th, 1999</h3>
          <h3>St. Louis, MO</h3>
          <h3>realericquach@gmail.com</h3>
        </div>
        <div className="right">
          <p>Work In Progress</p>
        </div>
      </div>
      <footer>
        <div></div>
      </footer>*/

export default App;
