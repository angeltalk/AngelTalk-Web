import React, { Component } from 'react'

class HeaderHowToUseContent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-7">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1>엔젤톡 100% 활용하기</h1>
                            <h3>엔젤톡은 사용하기 어렵지 않습니다.  <br/>아래 설명되어 있는 내용을 잘 살펴보세요. </h3>
                            <div className="badges">
                                <a className="badge-link" target="_blank" href="https://play.google.com/store/apps/details?id=act.angelman"><img src="../../img/btn-download.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="phone-screen">
                        <img src="../../img/img-phone.png" className="img-responsive center-block" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderHowToUseContent
