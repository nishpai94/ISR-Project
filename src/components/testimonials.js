import React from "react";
import ReactDOM from "react-dom";

import Item from "./Item";
import "./testimonials.css";
import img1 from "../Login/src/components/about/developers/dv.jpg"
import img2 from "../Login/src/components/about/developers/ankit.png"
import img3 from "../Login/src/components/about/developers/krish.jpg"
import img4 from "../Login/src/components/about/developers/anish.jpg"
import Slider from 'infinite-react-carousel';

function Testimonials() {
  return (
    <>
      <div className="back-color">
        <div className="center back-color">
          <h1 className="testimonial-head">Testimonials</h1>
          <hr className="fancy-line"/>
        </div>
        <div className="testimonial-backimg" style={{paddingTop:"4%",paddingBottom:"4%", backgroundColor:"#f6f6f6"}}>
        
        </div>
      </div>
    </>
  );
}

export default Testimonials;
