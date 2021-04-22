import React from 'react';
import HometopBanner from './HometopBanner';
function RefundPolicy() {
    const data = {
        h2: 'GCREDO Refund Policy'
    };
    return (
        <>
            <HometopBanner data={data} />
            <div className="container">
                <div className="row privacy-mtop">
                    <div className="col-md-12">
                        <p>The GCREDO Refund policy talks about the terms and conditions to be followed for a refund and the conditions on which the refunds are made. </p>
                        <p>GCREDO undertakes the service of administering the exams for certification courses provided by different accreditation bodies. The accreditation bodies are supposed to pay a fee to the credentialing organisation. The refund policy states the circumstances under which the fees will be refunded. </p>
                        <h3>On termination of the contract</h3>
                        <p>GCREDO will refund the fees for the service provided on the termination of the contract with the accreditation body. This termination may take place based on the discretion of either of the parties.  </p>
                        <p>In case of termination of the contract, the examination assessment fees will be refunded within a specific period of time, as governed by the refund policy.</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default RefundPolicy
