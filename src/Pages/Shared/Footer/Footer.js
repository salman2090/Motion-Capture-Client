import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
                <div>
                    <h2>Motion Capture</h2><hr />
                    <small>Corporate Office</small>
                    <p>202, Farmgate, Tejgaon, Dhaka-1215</p>
                    <p>(+880) 16112233445</p>
                    <p>m.capture@gmail.com</p>
                </div>
                <div>
                    <h2>At a Glance</h2><hr />
                    <p>Contact Us</p>
                    <p>Careers</p>
                    <p>FAQ's</p>
                    <p>Return Policy</p>
                </div>
                <div>
                    <h2>Follow Us</h2>
                    
                </div>
            </div>
            <p>Copyright &copy; Motion Capture. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;