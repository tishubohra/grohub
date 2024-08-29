import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div className='main-c'>
        <div className='custom-footer-box'>
        <div className="custom-footer-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <h3><span>GrowHub</span></h3>
                        <p className='content'>Welcome to GrowHub, your go-to source for all things plant-based and green living. Explore the beauty and benefits of a plant-powered lifestyle</p>
                        <div className="custom-footer-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <div className="d-flex flex-column">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <h5>Quick Links</h5>
                        <div className='emails'> 
                        <p><i className="fa-solid fa-phone-volume"></i> +91 94320931213</p>
                        <p><i className="fa-solid fa-envelope"></i>palakbohra09@gmail.com</p>
                        <p><i className="fa-solid fa-envelope"></i>rupanjalip3@gmail.com</p>
                        <p><i className="fa-solid fa-envelope"></i>28tdeepanshu@gmail.com</p>
                        <p><i className="fa-solid fa-paper-plane"></i> </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
    );
}

export default Footer;
