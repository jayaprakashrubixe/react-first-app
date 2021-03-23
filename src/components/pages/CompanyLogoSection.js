import React from 'react'
import './sass-css/CompanyLogoSection.css';
import Cimg1 from '../../assets/images/partner-a.png';
import Cimg2 from '../../assets/images/partner-b.png';
import Cimg3 from '../../assets/images/partner-c.png';
import Cimg4 from '../../assets/images/partner-d.png';
function CompanyLogoSection() {
    return (
        <>
            <div className="company-log-section">
                <div className="container">
                    <div className="row mt-4 pb-4">
                        <h4 className="text-center col-md-12">Over 4.500 website pages have been built with XIOM</h4>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6 logos-flex mt-4">
                                    <img src={Cimg1} alt="BigCo Inc. logo" className="cmpylogos" />
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6 logos-flex mt-4">
                                    <img src={Cimg2} alt="BigCo Inc. logo" className="cmpylogos" />
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6 logos-flex mt-4">
                                    <img src={Cimg3} alt="BigCo Inc. logo" className="cmpylogos" />
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6 logos-flex mt-4">
                                    <img src={Cimg4} alt="BigCo Inc. logo" className="cmpylogos" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyLogoSection;
