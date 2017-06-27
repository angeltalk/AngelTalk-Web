import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HeaderHowToUse from './../header/HeaderHowToUse.js'
import ContentHowToUse from './ContentHowToUse.js'

class ContentBodyFeatures extends Component {

    componentDidMount() {
        this.makeACard.addEventListener('click', () => {
            this.loadPage('makeACard');
            setTimeout( function(){
                window.scrollTo(0, document.getElementById('tab-section').offsetTop - 87)
                document.getElementById('navbar').classList.remove('in')
            },100 );
        })

        this.usingLockscreen.addEventListener('click', () => {
            this.loadPage('usingLockscreen');
            setTimeout( function(){
                window.scrollTo(0, document.getElementById('tab-section').offsetTop - 87)
                document.getElementById('navbar').classList.remove('in')
            },100 );
        })

        this.manageCards.addEventListener('click', () => {
            this.loadPage('manageCards');
            setTimeout( function(){
                window.scrollTo(0, document.getElementById('tab-section').offsetTop - 87)
                document.getElementById('navbar').classList.remove('in')
            },100 );
        })

        this.shareCards.addEventListener('click', () => {
            this.loadPage('shareCards');
            setTimeout( function(){
                window.scrollTo(0, document.getElementById('tab-section').offsetTop - 87)
                document.getElementById('navbar').classList.remove('in')
            },100 );
        })
    }

    loadPage = (selectedFeature) => {
        ReactDOM.render(
            <HeaderHowToUse/>,
            document.getElementById('header_body')
        )
        ReactDOM.render(
            <ContentHowToUse selectedFeature={selectedFeature}/>,
            document.getElementById('contents_body')
        )

        document.getElementById('menu_home').classList.remove('active')
        document.getElementById('menu_use_case').classList.remove('active')
        document.getElementById('menu_how_to_use').classList.add('active')
    }


    render() {
        return (
            <section id="features" className="features">
                <div className="container">
                    <div className="features-title">
                        <h1>KEY FEATURES</h1>
                    </div>
                    <div className="feature-items center-block">
                        <div className="row center-block">
                            <div className="col-sm-12 col-md-6 col-width-100" id="make_a_card" ref={elem => this.makeACard = elem}>
                                <a href="#">
                                    <div className="feature-item center-block">
                                        <img src="../img/ico-media.png" alt=""/>
                                        <h3>카드 구성은 실제 사진과 음성으로</h3>
                                        <p className="text-muted">글자나 기호 어려운 아이들에게<br/>실물 사진이나 영상을 보여주세요.<br/>
                                            실제 음성을 직접 녹음하시면<br/>아이들이 더 잘 반응해요.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-6 col-width-100" id="using_lockscreen" ref={elem => this.usingLockscreen = elem}>
                                <a href="#">
                                    <div className="feature-item center-block">
                                        <img src="../img/ico-locked.png" alt=""/>
                                        <h3>모든 카드는 스마트폰 잠금화면에</h3>
                                        <p className="text-muted">스마트폰으로 게임이나 유투브만 할까봐<br/>
                                            걱정되시죠?<br/>엔젤톡은 스마트폰의 잠금화면에 나타납니다.<br/>
                                            엉뚱한 사람에게 전화 걸거나,<br/>앱을 지우는 것을 막을 수 있어요.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row center-block">
                            <div className="col-sm-12 col-md-6 col-width-100" id="manage_cards" ref={elem => this.manageCards = elem}>
                                <a href="#">
                                    <div className="feature-item center-block">
                                        <img src="../img/ico-cards.png" alt=""/>
                                        <h3>카드 관리는 쉽고 빠르게</h3>
                                        <p className="text-muted">아이들이 커감에 따라 의사소통 카드를<br/>
                                            계속 변경해 주어야 합니다.<br/>엔젤톡을 이용하면 카드 관리를<br/>쉽게 할 수 있어요.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-6 col-width-100" id="share_cards" ref={elem => this.shareCards = elem}>
                                <a href="#">
                                    <div className="feature-item center-block">
                                        <img src="../img/ico-share.png" alt=""/>
                                        <h3>다른 사람들과 공유는 편리하게</h3>
                                        <p className="text-muted">가족, 친구들, 학교 선생님 또는 언어 치료사분들과<br/>
                                            카드를 공유해 보세요.<br/>카카오톡만 있으면 쉽게 카드를<br/>원하는 사람과 공유할 수 있어요.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentBodyFeatures
