import React from 'react'
import ntfImg1 from '../../assets/images/sorry-gif.gif';
function NotFoundPage() {
    const mystyleh1 = {
        color: "red",
        fontSize: "30px",
        textAlign: "center"
    }
    const mystylep = {
        color: "green",
        fontSize: "20px",
        textAlign: "center"
    }
    return (
        <>
            <div className="container">
                <div className="row" style={{ marginTop: "60px" }}>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <img src={ntfImg1} alt="image not display" />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-12">
                        <h1 style={mystyleh1}>Page Not Found</h1>
                        <h3 style={mystylep}>Please Go To Back</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage
