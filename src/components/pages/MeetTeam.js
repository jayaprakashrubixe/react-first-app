import React from 'react';
import './sass-css/MoreFeatures.css';
import Timg1 from '../../assets/images/team-a-lg.jpg';
import Timg2 from '../../assets/images/team-b-lg.jpg';
import Timg3 from '../../assets/images/team-c-lg.jpg';
import Timg4 from '../../assets/images/team-d-lg.jpg';

function MeetTeam() {
    return (
        <>

            <div className="more-feature"></div>

            <div className="sub-more-features">
                <div className="container">
                    <div className="row">
                        <h2 className="col-md-12 text-center">More features</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="features-details meeteamdetails">
                                <img src={Timg1} alt="image not display" />
                                <h3 className="mt-2">Michel Logan</h3>
                                <p>Founder</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="features-details meeteamdetails">
                                <img src={Timg2} alt="image not display" />
                                <h3 className="mt-2">David sean</h3>
                                <p>Designer</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="features-details meeteamdetails">
                                <img src={Timg3} alt="image not display" />
                                <h3 className="mt-2">Alfred john</h3>
                                <p>Developer</p>
                            </div>
                        </div>
                        <div className="col-md-3 mt-4">
                            <div className="features-details meeteamdetails">
                                <img src={Timg4} alt="image not display" />
                                <h3 className="mt-2">Thomas lucas</h3>
                                <p>Team member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default MeetTeam
