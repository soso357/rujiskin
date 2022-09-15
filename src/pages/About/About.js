import React from "react";
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/SliderData";


const About = () => {
  return (
   <div>
      <h1>About</h1>
      <ImageSlider slides={SliderData} />
    </div>
    
  );
};

export default About;

