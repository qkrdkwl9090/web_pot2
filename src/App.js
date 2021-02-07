
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from './images/1.svg'
import image2 from './images/2.svg'
import image3 from './images/3.svg'
import './App.scss';

function App() {
  return (
    <div className="content_wrap">
      <section className="left_header"> 
        <div className="side-button">
          <div><AiFillInstagram/></div>          
          <div><AiOutlineTwitter/></div>
          <div><AiFillFacebook/></div>
        </div>     
      </section>
      <div className="slider">
          {/* <img src = {Image}></img> */}
          <div className="slide-container">
          <Slide>
            <div className="each-slide1">
              <img src= {image1}/>
            </div>
            <div className="each-slide2">
              <img src= {image2}/>
            </div>
            <div className="each-slide3">
              <img src= {image3}/>
            </div>
          </Slide>
        </div>
      </div>

      <div className="content-text">
        <p>WHAT MAKE A</p>
        <p className="big green">GREAT</p>
        <p className="big">PRODUCT<br></br>DEVELOP<br></br>TEAM?</p>
      </div>
      
      <div className="content-sub-text">
        <p>The 2021 Festival<br></br>will be hosted online<br></br>ron in Korean</p>
        <p className="big">08</p>
        <p className="medium">FEB 2021</p>
      </div>
    </div>
  );
}

export default App;
