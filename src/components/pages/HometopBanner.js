import React from 'react';
import './sass-css/HometopBanner.css';
import Himg1 from '../../assets/images/shape-anew.png';
import Himg2 from '../../assets/images/header.png';
function HometopBanner(props) {

    return (
        <>
            <div className="header-area" id="home">
                <div className="sub-header-area" style={{ backgroundImage: `url(${Himg1})` }}>
                    <div className="container">
                        <div className="row flex-sm-column-reverse flex-md-row">
                            <div className="col-md-5 headertopbanner">
                                <h1>{props.data.h2}</h1>
                                <p>{props.data.p}</p>
                                {/* <a href="#">Start trial</a> */}
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-6 headertopbanner">
                                <img src={Himg2} alt="image not display" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HometopBanner
