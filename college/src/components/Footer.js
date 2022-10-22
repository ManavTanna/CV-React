import React from "react";
import {FaLinkedin, FaFacebook, FaInstagram, FaEnvelope} from 'react-icons/fa'

const Footer = () =>  {
        return(
            <div>
    <footer style={{position:'relative', bottom:'800px'}}>
    <center>
      <h3 style={{color: '#000'}}>Contact Me</h3>
      <br />
      <div class="footer">
      <ul class="social-network social-circle">
        <li><a href="" className="IcoLinkedin"><i><FaLinkedin /></i></a></li>
        <li><a href="" className="IcoFacebook"><i><FaFacebook /></i></a></li>
        <li><a href="" className="IcoInstagram" ><i><FaInstagram /></i></a></li>
        <li><a href="" className="IcoGmail"><i><FaEnvelope /></i></a></li>
       </ul>				
    </div>
    <br />
    <div class="row">
      <div class="col-md-12 copy">
        <p class="text-center">&copy; Copyright 2022 - Manav Tanna.  All rights reserved.</p>
      </div>
    </div>
    </center>
  </footer>
  </div>
        )
    }
 
  export default Footer;