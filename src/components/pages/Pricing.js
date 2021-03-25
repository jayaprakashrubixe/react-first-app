import React, { useState } from 'react';
import './sass-css/Pricing.css';
import HometopBanner from './HometopBanner';
import CompanyLogoSection from './CompanyLogoSection';

function Pricing() {
    const data = {
        h2: 'Pricing plans',
        p: 'Chose the best plan that fits your requirments'
    };



    return (
        <>
            <HometopBanner data={data} />

            <div className="best-pricing text-center">
                <div className="container">
                    <div className="row">
                        <h2 className="col-md-12">Best pricing</h2>
                        <div className="col-md-12">
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="pricing-card">
                                <h3>Free</h3>
                                <p className="mt-4"><span className="span1">$</span> <span className="span2">0</span></p>
                                <p>100% free forever</p>
                                <p>10 Pages</p>
                                <p>2 Gb storage</p>
                                <p>24/7 Customer support</p>
                                <p>2Gb Bandwith</p>
                                <p>Free update</p>
                                <a href="#" className="btn btn-lg">Get started</a>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="pricing-card">
                                <h3>Premium</h3>
                                <p className="mt-4"><span className="span1">$</span> <span className="span2">28.4</span></p>
                                <p>100% free forever</p>
                                <p>10 Pages</p>
                                <p>2 Gb storage</p>
                                <p>24/7 Customer support</p>
                                <p>2Gb Bandwith</p>
                                <p>Free update</p>
                                <a href="#" className="btn btn-lg">Get started</a>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="pricing-card">
                                <h3>Pro</h3>
                                <p className="mt-4"><span className="span1">$</span> <span className="span2">16.5</span></p>
                                <p>100% free forever</p>
                                <p>10 Pages</p>
                                <p>2 Gb storage</p>
                                <p>24/7 Customer support</p>
                                <p>2Gb Bandwith</p>
                                <p>Free update</p>
                                <a href="#" className="btn btn-lg">Get started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordin-quesitions">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>FREQUENTLY ASKED QUESTIONS</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                        </div>
                        <div className="col-md-12">

                        </div>
                    </div>
                </div>
            </div>

            <CompanyLogoSection />

        </>
    )
}

export default Pricing;
