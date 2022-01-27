import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
       <div className='footer-fild'>
            <div className='row pt-5'>
            <div className='col-lg-4 col-sm-12'>
                <h4>Travelers' Experiences</h4>

            </div>
            <div className='col-lg-4 col-sm-12'>
            <h5>About US</h5>
            <p className='pharagrapg'> where one can easily choose their desired blood groups from nearby locations.</p>


            </div>
            <div className='col-lg-4 col-sm-12'>
              <h5>FOllOW US</h5>
              <i class="fab fa-facebook-f   sociel-icon "></i>
              <i class="fab fa-twitter  sociel-icon "></i>
              <i class="fab fa-instagram-square  sociel-icon "></i>
              <i class="fab fa-youtube  sociel-icon "></i>


            </div>
            
        </div>
       </div>
    );
};

export default Footer;