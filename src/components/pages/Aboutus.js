import React from 'react';
import HometopBanner from './HometopBanner';
import MeetTeam from './MeetTeam';
import './sass-css/Aboutus.css';
import Testimonial from './Testimonial';
import CompanyLogoSection from './CompanyLogoSection';
function Aboutus() {
    const data = {
        h2: 'About GCREDO',
        p: 'We are a global organisation that helps in setting up a credentialing infrastructure for certification bodies. Make use of our expertise to get informative insights that will help you to stay at the apex of credentialing. We help in administering examinations in collaboration with the certification bodies.'
    };
    return (
        <>
            <HometopBanner data={data} />
            <div className="container">
                <div className="row section-margintop">
                    <div className="col-md-4 mt-4">
                        <h2>Everything you need to know about us</h2>
                    </div>
                    <div className="col-md-8 mt-4">
                        <p>We establish standards that help to define your professional capabilities. We design products of certifications, that are aimed at specific industry verticals. We provide end to end services to organisations and certification bodies, who are active in accreditation, and credentialing. We provide assistance to the certification bodies in administering the exams.   </p>
                    </div>
                </div>
                <div className="row section-margintop">
                    <h2 className="text-center whychoose-us col-md-12">Why Choose Us?</h2>
                    <div className="col-md-12">
                        <p className="ptag">Join us, to get the best out of credentialing.</p>
                    </div>
                    <div className="col-md-4 mt-4 why-tags">
                        <h4>Global Standards</h4>
                        <p>We provide a credentialing framework that is aligned with the standards, which is recognised on a global platform. </p>
                    </div>
                    <div className="col-md-4 mt-4 why-tags">
                        <h4>End to end credentialing </h4>
                        <p>We help in providing an end to end credentialing framework for enterprises and clients. </p>
                    </div>
                    <div className="col-md-4 mt-4 why-tags">
                        <h4>Industry-oriented certifications</h4>
                        <p>We provide certifications that are designed based on the skillsets required by the current demands of the industry. </p>
                    </div>
                    {/* <div className="col-md-3 mt-4 why-tags">
                        <h4>Grow</h4>
                        <p>Essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div> */}
                </div>
            </div>
            {/* <MeetTeam />
            <Testimonial />
            <CompanyLogoSection /> */}

        </>
    )
}

export default Aboutus
