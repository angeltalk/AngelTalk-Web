import React, { Component } from 'react'

class HeaderHomeContent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-7">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1>Application for Children with Special Needs</h1>
                            <h3>AngelTalk is built to help the children with complex communication needs with their
                                parents and caregivers pleasantly and quickly.</h3>
                            <h3>It is a mobile app suitable for those who just decided to start using Augmentative and
                                Alternative Communication Tools.</h3>
                            <div className="badges">
                                <a className="badge-link" target="_blank" href="https://play.google.com/store/apps/details?id=act.angelman">
                                    <img src="../../img/btn-download.png" alt=""></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="phone-screen">
                        <img src="../../img/img-phone.png" className="img-responsive center-block" alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderHomeContent
