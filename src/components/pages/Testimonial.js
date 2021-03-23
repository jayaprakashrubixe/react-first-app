import React from 'react';
import './sass-css/Testimonial.css';
import Imag1 from '../../assets/images/client-a.jpg';

function Testimonial() {
    return (
        <>
            <div className="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Testimonial</h2>
                            <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        </div>
                        <div className="col-md-4 text-center mt-4">
                            <div className="testimonial-card">
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                            <img src={Imag1} alt="image not display" />
                            <h3 className="profilename mt-2">Adam smith</h3>
                            <p className="profiletag">Rocket inc</p>
                        </div>
                        <div className="col-md-4 text-center mt-4">
                            <div className="testimonial-card">
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                            <img src={Imag1} alt="image not display" />
                            <h3 className="profilename mt-2">Adam smith</h3>
                            <p className="profiletag">Rocket inc</p>
                        </div>
                        <div className="col-md-4 text-center mt-4">
                            <div className="testimonial-card">
                                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                            <img src={Imag1} alt="image not display" />
                            <h3 className="profilename mt-2">Adam smith</h3>
                            <p className="profiletag">Rocket inc</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;
