import React from 'react';
import HometopBanner from './HometopBanner';
import MeetTeam from './MeetTeam';
import './sass-css/Aboutus.css';
import Testimonial from './Testimonial';
import CompanyLogoSection from './CompanyLogoSection';
function Aboutus() {
    const data = {
        h2:'About GCREDO',
        p:'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
      };
    return (
        <>
            <HometopBanner data ={data} />
            <div className="container">
                <div className="row section-margintop">
                    <div className="col-md-4 mt-4">
                        <h2>Everything you need to know about us</h2>
                    </div>
                    <div className="col-md-8 mt-4">
                        <p>Encididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
                <div className="row section-margintop">
                    <h2 className="text-center whychoose-us col-md-12">Why choose us</h2>
                    <div className="col-md-12">
                        <p className="ptag">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className="col-md-3 mt-4 why-tags">
                        <h4>Benifits</h4>
                        <p>Essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div className="col-md-3 mt-4 why-tags">
                        <h4>Colaboration</h4>
                        <p>Essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div className="col-md-3 mt-4 why-tags">
                        <h4>Creative</h4>
                        <p>Essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <div className="col-md-3 mt-4 why-tags">
                        <h4>Grow</h4>
                        <p>Essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                </div>
            </div>
            <MeetTeam />
            <Testimonial />
            <CompanyLogoSection />

        </>
    )
}

export default Aboutus
