import React from 'react';
import { Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import useWindowDimensions from "./viewportHook";

function ImgSlider(){
	const myStyle={
    
    width:'10%',
    height:'10px',
    };
	const { height, width } = useWindowDimensions();
	const images = [
  { url: "https://wallpaperaccess.com/full/1077768.jpg" },
  { url: "https://wallpapercave.com/wp/0f1Lulf.jpg" },
  { url: "https://i.pinimg.com/originals/6b/13/20/6b13202c1de72c7d59cf7b0be0e9b147.jpg" },
];
	return(

	<div style={myStyle}>
	<SimpleImageSlider
        width={width/2}
        height={height/2}
        images={images}
		showBullets="true"
      />
	  
    </div>
  );
}
export default ImgSlider;

//width: {width} ~ height: {height}