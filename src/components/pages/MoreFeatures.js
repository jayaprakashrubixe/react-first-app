import React from 'react'
import './sass-css/MoreFeatures.css';
import Imag1 from '../../assets/images/feature-icon-a.png';
import Imag2 from '../../assets/images/feature-icon-b.png';
import Imag3 from '../../assets/images/feature-icon-c.png';
import Imag4 from '../../assets/images/feature-icon-d.png';
import Imag5 from '../../assets/images/feature-icon-e.png';
import Imag6 from '../../assets/images/feature-icon-f.png';
import Imag7 from '../../assets/images/feature-icon-g.png';
import Imag8 from '../../assets/images/feature-icon-h.png';
function MoreFeatures() {
    return (
        <>
            <div className="more-feature"></div>

            <div className="sub-more-features">
                <div className="container">
                    <div className="row">
                        <h2 className="col-md-12 text-center">More Features</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-4">
                            {/* <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> */}
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="features-details">
                                <img src={Imag1} alt="image not display" />
                                <h4 className="mt-4">Globally Recognised</h4>
                                <p>Our credentialing system is recognised on a global platform.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="features-details">
                                <img src={Imag2} alt="image not display" />
                                <h4 className="mt-4">24*7 Support</h4>
                                <p>We provide 24*7 support for addressing possible queries and issues regarding credentialing, and exam assessments. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="features-details">
                                <img src={Imag3} alt="image not display" />
                                <h4 className="mt-4">Wide range of certifications</h4>
                                <p>We have a wide range of accreditation bodies to choose from, providing certifications in different domains. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="features-details">
                                <img src={Imag4} alt="image not display" />
                                <h4 className="mt-4">Dedicated Team</h4>
                                <p>We have a dedicated team to guide you through the credentialing framework. </p>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-4 mt-4">
                            <div className="features-details">
                                <img src={Imag5} alt="image not display" />
                                <h4 className="mt-4">Source Data</h4>
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="features-details">
                                <img src={Imag6} alt="image not display" />
                                <h4 className="mt-4">Source Data</h4>
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="features-details">
                                <img src={Imag7} alt="image not display" />
                                <h4 className="mt-4">Source Data</h4>
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="features-details">
                                <img src={Imag8} alt="image not display" />
                                <h4 className="mt-4">Source Data</h4>
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

        </>
    )
}

export default MoreFeatures
