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

        Array.prototype.forEach.call(document.getElementsByClassName('ul_nav'), (elem) => {
            elem.classList.remove('active')
        })

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
                                        <img src="../img/ico-media.png"/>
                                        <h3>CARDS WITH REAL IMAGE & VOICE</h3>
                                        <p className="text-muted">Use real pictures or short video clips of the things<br/>
                                            that your child want to express. <br/>Record your voice to gain your child’s attention.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-6 col-width-100" id="using_lockscreen" ref={elem => this.usingLockscreen = elem}>
                                <a href="#">
                                    <div className="feature-item center-block">
                                        <img src="../img/ico-locked.png"/>
                                        <h3>CARDS ON LOCK SCREEN</h3>
                                        <p className="text-muted">Worrying about abuse of smartphone by your child?<br/>Using the lock
                                            screen of your smartphone,<br/>You can hand it to your child, anytime you want.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row center-block">
                            <div className="col-sm-12 col-md-6 col-width-100" id="manage_cards" ref={elem => this.manageCards = elem}>
                                <a href="#">
                                    <div className="feature-item center-block">
                                        <img src="../img/ico-cards.png"/>
                                        <h3>MANAGE CARDS EASILY</h3>
                                        <p className="text-muted">Wanna hide some cards that are not appropriate<br/>at this moment, or
                                            change some cards?<br/>It takes only a few seconds to do all things above.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-6 col-width-100" id="share_cards" ref={elem => this.shareCards = elem}>
                                <a href="#">
                                    <div className="feature-item center-block">
                                        <img src="../img/ico-share.png"/>
                                        <h3>SHARE CARDS INSTANTLY</h3>
                                        <p className="text-muted">Share cards to family members, school teachers,<br/>and language
                                            pathologists.<br/>You can share instantly via text messages or KakaoTalk.</p>
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
