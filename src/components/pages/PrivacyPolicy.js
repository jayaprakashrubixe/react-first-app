import React from 'react';
import HometopBanner from './HometopBanner';
import './sass-css/PrivacyPolicy.css';
function PrivacyPolicy() {
    const data = {
        h2: 'Privacy Policy'
    };
    return (
        <>
            <HometopBanner data={data} />
            {/* <div className="privacypolicy-bg" style={{ backgroundImage: `url(${privacyImg})` }}></div> */}
            <div className="container">
                <div className="row privacy-mtop">
                    <div className="col-md-12">
                        <p>Our Privacy Policy talks about how we use your personal information and who are the stakeholders of this information. We view your privacy as an object of paramount importance to ensure to utilise every data provided by you to serve you better. As an organisation for administering examinations and conducting assessments, we are in contact with various certification bodies, training institutes. We are well aware of their respective goodwill and therefore consider safeguarding their data as our top priority. </p>
                        <h3>How we collect and use the data</h3>
                        <p>We collect and process personal information that is required to take the certification process forward. We use the information as per the guidelines mentioned in this policy. </p>
                        <h3>What are the information collected by GCREDO?</h3>
                        <p>GCREDO is an organisation that is into the administration of exams, by partnering with certification bodies, training institutes. We collect information such as name, address, E-mail ID, Contact No.  </p>
                        <h5>a). Administering of certification exams</h5>
                        <p>GCREDO  undertakes the responsibilities of administering certification exams and takes care of the payments and other operational activities. Therefore it is interested in all those information that is essential to take the process forward. The information includes your personal information such as name, age, gender, educational qualification.</p>
                        <h5>b). Customer Service</h5>
                        <p>GCREDO offers a 24/7 customer support facility for clearing your queries and addressing possible issues. It collects the information that is essential to assist you in solving service-related issues.</p>
                        <h5>c). Suppliers Information</h5>
                        <p>We come in contact with suppliers who provide us with goods and services. Therefore, we also collect the personal information of the suppliers.  </p>
                        <h5>d). Use of Cookies</h5>
                        <p>GCREDO uses cookies to ensure a better browsing experience. These cookies store data which includes your login information. </p>
                        <h3>Disclosure of information to third parties</h3>
                        <p>We disclose information to third parties in the following circumstances:-</p>
                        <p>1). When we receive the due consent from the parties involved, whose personal information is being subjected to disclosure. </p>
                        <p>2). When disclosure of such information is mandatory to proceed with the credentialing process. </p>
                        <p>3). During the examination, with the personnel in charge of certification. </p>
                        <p>4). When disclosing the results of the examination</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
