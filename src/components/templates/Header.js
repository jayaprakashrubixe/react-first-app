import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Logo from '../../assets/images/gcredo-logo.png';



function Header() {
    const [header, setHeader] = useState(false);

     function handleScroll(){
        if(window.scrollY > 150){
            setHeader(true);
        }
        else{
            setHeader(false)
        }
    }

    window.addEventListener('scroll',handleScroll)
   
    return (
        <>
            <header  className={header ? 'header active' : 'header'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/">
                                <img src={Logo} alt="image not display" className={header ? "imagelogo-resize" : "img-logo"} />
                            </Link>
                            <input className="menu-btn" type="checkbox" id="menu-btn" />
                            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                            <ul className="menu">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus">Aboutus</Link>
                                </li>
                                <li>
                                    <Link to="/features">Features</Link>
                                </li>
                                <li>
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/contactus">Contactus</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </header>
        </>
    )
}

export default Header;
