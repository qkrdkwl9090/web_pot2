import logo from './logo.svg';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import SimpleImageSlider from "react-simple-image-slider";
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
      <div class="slider">
        <div class="slide_viewer">
          <div class="slide_group">
            <div class="slide">
            </div>
            <div class="slide">
            </div>
            <div class="slide">
            </div>
            <div class="slide">
            </div>
          </div>
        </div>
      </div>
      <div class="slide_buttons">
      </div>

      <div className="content-text">
        <p className>WHAT MAKE A</p>
        <p className="big grean">GREAT</p>
        <p className="big">PRODUCT<br></br>DEVELOP<br></br>TEAM?</p>
      </div>
      
      <div className="content-sub-text">
        <p className>The 2021 Festival will<br></br>be hosted online on in<br></br>both English and<br></br>Vietnamese.</p>
        <p className="big">08</p>
        <p className="medium">FEB 2021</p>
      </div>
    </div>
  );
}

export default App;
