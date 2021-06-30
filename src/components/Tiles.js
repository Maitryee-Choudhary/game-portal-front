import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
import './Tiles.css';

function Tiles(){
	useEffect(()=>
	{
		Aos.init({duration:2000});
	},[]);
	return(
	<div>
	<div className="grids">
		<div className="boxes">1</div>
		<div data-aos="flip-left" className="boxes">2</div>
		<div data-aos="flip-left" className="boxes">3</div>
		<div data-aos="flip-left" className="boxes">4</div>
	</div>
	</div>
  );
}
export default Tiles;