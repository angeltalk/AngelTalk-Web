import React, { Component } from 'react'

class ContentBodyBanners extends Component {
    render() {
        return (
            <section id="banners" className="banners">
                <div className="container">
                    <div className="row center-block">
                        <div className="col-sm-3">
                            <a href="https://www.kord.or.kr:55308/index.php" target="_blank">
                                <img className="banner-image center-block" src="../img/img-logo-1.png" alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="#" target="_self">
                                <img className="banner-image center-block" src="../img/img-logo-2.png" alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="http://ijun.or.kr/" target="_blank">
                                <img className="banner-image center-block" src="../img/img-logo-3.png" alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a href="http://www.hanspeak.com/" target="_blank">
                                <img className="banner-image center-block" src="../img/img-logo-4.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentBodyBanners
