import React from 'react';
import { Link } from 'react-router-dom';
import ImgSlider from './ImgSlider';
import './Home.css'

function Home(){
	return(
	<div>
	<div className="slider">
	
	<span>
	<ImgSlider />
	</span>
	</div>
	<div className="Right">
	</div>
	</div>
  );
}
export default Home;