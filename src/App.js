import './App.css';
/*import * as GrIcons from "react-icons/gr"
import eric from './images/eric.jpg'*/
import { Document, Page, pdfjs } from 'react-pdf';
import resume from './images/Eric Quach Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <div className="home">
      <Document file={resume}>
        <Page pageNumber={1}></Page>
      </Document>
      <div>
        <h1> Sorry this website is still a work in progress! For now its just my resume again :^)</h1>
      </div>
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
