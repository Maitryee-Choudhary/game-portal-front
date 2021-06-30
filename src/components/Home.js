import React from 'react';
import { Link } from 'react-router-dom';
import ImgSlider from './ImgSlider';
import './Home.css';
import Tiles from './Tiles';

function Home(){
	return(
	<div className="homemain">
	<div className="slider">
	
	<span>
	<ImgSlider />
	</span>
	</div>
	<div className="Right">
	<span>
	<Tiles />
	</span>
	</div>
	</div>
  );
}
export default Home;