import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
	return(
	<div>
	<footer className="page-footer teal darken-3" >
          <div className="container">
            <div className="row">
              <div className="col l2 s12">
                <h5 className="white-text">Logo</h5>
          
              </div>
              <div className="col l3 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
			  <div className="col l3 offset-l2 s12">
                <h5 className="white-text">Subscribe</h5>
                
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
	</div>
  );
}
export default Footer;