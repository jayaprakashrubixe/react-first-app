import React from 'react';
import ContactFrom from './ContactFrom';
import HometopBanner from './HometopBanner';
import './sass-css/Contactus.css';

function Contactus() {
    const data = {
        h2: 'Contact Us',
        p: 'Connect with us to know more about credentialing.'
    };
    return (
        <>
            <HometopBanner data={data} />
            <div className="our-address ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center">CONTACT US BY EMAIL</h2>
                            <p>Complete the contact form below and one of our dedicated Business Consultants will be in touch shortly.</p>
                        </div>
                        {/* <div className="col-md-4 mt-4">
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
                        </div> */}

                        <ContactFrom />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus
