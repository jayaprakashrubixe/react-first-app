import React from 'react';
import './sass-css/Home.css';
import Wimg4 from '../../assets/images/easy-config.png';
import Wimg5 from '../../assets/images/tools.png';

function FeatureSection() {
    return (
        <>
            <div className="config">
                <div className="container">
                    <div className="row mt-4 pb-4">
                        <div className="col-md-7">
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
                        <div className="col-md-7 text-right">
                            <img src={Wimg5} alt="image not dispaly" className="easy-config-img" />
                        </div>
                    </div>

                    <div className="row pb-4 margin-unlimited">
                        <div className="col-md-7">
                            <img src={Wimg4} alt="image not dispaly" className="easy-config-img" />
                        </div>
                        <div className="col-md-5 mt-4">
                            <h2>24/7 Support</h2>
                            <p className="mt-4">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. laboris nisi ut aliquip quis nostrud exercitation ullamco laboris nisi ut aliquip. nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <a href="#">Read More</a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default FeatureSection
