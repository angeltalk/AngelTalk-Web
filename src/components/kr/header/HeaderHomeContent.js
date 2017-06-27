import React, { Component } from 'react'

class HeaderHomeContent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-7">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1>의사소통이 어려운<br/>아이들을 위한 AAC 앱</h1>
                            <h3>구어 표현에 어려움을 겪는 아이들이 가족이나 선생님과 쉽고 빠르게 대화하는 것을 도와드리기 위해 만들었어요.</h3>
                            <h3>보완대체의사소통(AAC)을 처음 시도해 보시는 분들에게 특히 유용합니다.</h3>

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
