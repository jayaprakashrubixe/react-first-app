import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Bgimg from '../../assets/images/shape-d.svg';
import logoicon from '../../assets/images/gcredo-icon.png';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CtaBox from '../pages/CtaBox';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';





function Footer() {

    const [scrollArrow, setScrollArrow] = useState(false);

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        if (window.scrollY > 200) {
            setScrollArrow(true);
        } else {
            setScrollArrow(false);
        }
    }

    function smoothScroller() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <footer>
                <div className="footer-step1" style={{ backgroundImage: `url(${Bgimg})` }}></div>
                {/* <CtaBox /> */}
                <div className="container">
                    <div className="row footer-section-row">
                        <div className="col-md-3 col-sm-6 col-6 mt-4">
                            <img src={logoicon} alt="logoicon image not display" />
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 mt-4">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus">Aboutus</Link>
                                </li>
                                <li>
                                    <Link to="/contactus">Contactus</Link>
                                </li>
                                <li>
                                    <Link to="/features">Features</Link>
                                </li>
                                <li>
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 mt-4">
                            <ul>
                                <li>
                                    <Link to="/">Terms & condition</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="/contactus">Policy</Link>
                                </li>
                                <li>
                                    <Link to="/blog">Support</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 mt-4">
                            <ul>
                                <li>
                                    <Link to="/">+(012) 123 456</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus">info@yourmail.com</Link>
                                </li>
                                <li>
                                    <Link to="/contactus">West anderson court 32</Link>
                                </li>
                                <li>
                                    <Link to="/blog">London , UK</Link>
                                </li>
                            </ul>
                            <ul className="social-icons mt-2">
                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </Link>
                                </li>

                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <div className={scrollArrow ? 'topscrolling' : 'topscroll__none'} >
                                <li onClick={smoothScroller}>
                                    <Link to=''>
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-4">
                        <div className="col-md-12">
                            <hr></hr>
                            <p className="text-center all-reserved-ptag">© 2021 GCREDO, All rights reserved by Softnio.</p>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )

}

export default Footer;

