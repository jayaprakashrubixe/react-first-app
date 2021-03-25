import React from 'react';
import CompanyLogoSection from './CompanyLogoSection';
import HometopBanner from './HometopBanner';
import './sass-css/Home.css';
import MoreFeatures from './MoreFeatures';
import Testimonial from './Testimonial';
import Wimg1 from '../../assets/images/why-icon-a.png';
import Wimg2 from '../../assets/images/why-icon-b.png';
import Wimg3 from '../../assets/images/why-icon-c.png';
import Wimg4 from '../../assets/images/easy-config.png';
import Wimg5 from '../../assets/images/tools.png';

function Home() {
    const data = {
        h2: 'Build your page with XIOM Template',
        p: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    };
    return (
        <>
            <HometopBanner data={data} />
            <CompanyLogoSection />

            <div className="why-choose-this">
                <div className="container">
                    <div className="row mt-4 pb-4">
                        <h2 className="col-md-12 text-center">Why choose this?</h2>
                        <div className="col-md-12">
                            <p className="text-center">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 mt-4">
                            <div className="whychoose-box">
                                <img src={Wimg1} alt="image not display" className="whychoose-boxicon" />
                                <h3>Effortless Integration</h3>
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 mt-4">
                            <div className="whychoose-box">
                                <img src={Wimg2} alt="image not display" className="whychoose-boxicon" />
                                <h3>Fast & optimized</h3>
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 mt-4">
                            <div className="whychoose-box">
                                <img src={Wimg3} alt="image not display" className="whychoose-boxicon" />
                                <h3>Open platform</h3>
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="config">
                <div className="config-shape">
                    <svg x="0px" y="0px" viewBox="0 0 750.6 859">
                        <g fill="#F8FBFF">
                            <path d="M0,0v44.5c0,0,58-29,100-39s82-5,107,12s47,38,99,49s157,18,205,21s127,12,171,32s51,64,60,108s2,152-32,225
                s-87,132-172,164s-115,51-165,93s-114,104-166,131s-128,32-207-38V859h1920V0H0z"></path>
                        </g>
                    </svg>
                </div>
                <div className="container">
                    <div className="row mt-4 pb-4">
                        <div className="col-md-7 text-left">
                            <img src={Wimg4} alt="image not dispaly" className="easy-config-img" />
                        </div>
                        <div className="col-md-5 mt-4">
                            <h2>Easy configuration for anyone.</h2>
                            <p className="mt-4">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="row pb-4 margin-unlimited">
                        <div className="col-md-5 mt-4">
                            <h2>Unlimited usefull tools in one click.</h2>
                            <p className="mt-4">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <a href="#">Read More</a>
                        </div>
                        <div className="col-md-7 text-center">
                            <img src={Wimg5} alt="image not dispaly" className="easy-config-img" />
                        </div>
                    </div>
                </div>
            </div>

            <MoreFeatures />
            <Testimonial />

        </>
    )
}

export default Home

