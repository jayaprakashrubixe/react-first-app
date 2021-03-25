import React from 'react';
import HometopBanner from './HometopBanner';
import './sass-css/Contactus.css';

function Contactus() {
    const data = {
        h2:'Contact',
        p:'We always remain in your touch'
 };
    return (
        <>
            <HometopBanner data={data}/>
            <div className="our-address text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Our Address</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="our-address-details">
                                <h3>Copenhagen</h3>
                                <p className="mt-4">Bjelkes Allé 6A, 2200</p>
                                <p>København</p>
                                <p>sayhello@softnio.com</p>
                                <p>+4 509 120 6705 - Main Office</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="our-address-details">
                                <h3>Amsterdam</h3>
                                <p className="mt-4">Bjelkes Allé 6A, 2200</p>
                                <p>København</p>
                                <p>sayhello@softnio.com</p>
                                <p>+4 509 120 6705 - Main Office</p>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="our-address-details">
                                <h3>Berlin</h3>
                                <p className="mt-4">Bjelkes Allé 6A, 2200</p>
                                <p>København</p>
                                <p>sayhello@softnio.com</p>
                                <p>+4 509 120 6705 - Main Office</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus
