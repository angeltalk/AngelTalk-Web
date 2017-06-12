import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ContentHowToUseMakeACard from './ContentHowToUseMakeACard.js'
import ContentHowToUseManageCards from './ContentHowToUseManageCards.js'
import ContentHowToUseShareCards from './ContentHowToUseShareCards.js'
import ContentHowToUseUsingLockscreen from './ContentHowToUseUsingLockscreen.js'

class ContentHowToUse extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.windowScrollEvent)
        this.makeACard.addEventListener('click', () => {
            ReactDOM.render(
                <ContentHowToUseMakeACard />,
                this.tabContent
            )
        })
        this.manageCards.addEventListener('click', () => {
            ReactDOM.render(
                <ContentHowToUseManageCards />,
                this.tabContent
            )
        })
        this.shareCards.addEventListener('click', () => {
            ReactDOM.render(
                <ContentHowToUseShareCards />,
                this.tabContent
            )
        })
        this.usingLockscreen.addEventListener('click', () => {
            ReactDOM.render(
                <ContentHowToUseUsingLockscreen />,
                this.tabContent
            )
        })

        let selectedFeature = this.props.selectedFeature

        if(selectedFeature != null) {
            if(selectedFeature === 'makeACard') {
                this.makeACard.click()
            } else if(selectedFeature === 'manageCards') {
                this.manageCards.click()
            } else if(selectedFeature === 'shareCards') {
                this.shareCards.click()
            } else if(selectedFeature === 'usingLockscreen') {
                this.usingLockscreen.click()
            } else {
                this.makeACard.click()
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.windowScrollEvent)
    }


    windowScrollEvent = () => {
        let topOffset = window.scrollY
        let headerMain = document.getElementById('header-main')
        let navTop = document.getElementById('nav_top')

        if(topOffset > document.getElementById('contents_body').offsetTop - 88){
            headerMain.style.marginTop = "108px"
            navTop.classList.add("navbar-fixed-top")
            navTop.classList.add("navbar-fixed-top-inactive")
        } else {
            headerMain.style.marginTop = "0px"
            navTop.classList.remove("navbar-fixed-top-inactive")
            navTop.classList.remove("navbar-fixed-top")
        }
    }

    render() {
        return (
            <section id="tab-section" className="tab-section">
                <div className="container">
                    {/* Nav tabs */}
                    <div className="tutorials center-block">
                        <div className="nav-tabs-area">
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a id='makeACard' ref={(elem) => this.makeACard = elem} href="#make-a-card" aria-controls="make-a-card" role="tab" data-toggle="tab">MAKE A CARD</a>
                                </li>
                                <li role="presentation" >
                                    <a id='usingLockscreen' ref={(elem) => this.usingLockscreen = elem} href="#using-lockscreen" aria-controls="using-lockscreen" role="tab" data-toggle="tab">LOCK SCREEN</a>
                                </li>
                                <li role="presentation">
                                    <a id='manageCards' ref={(elem) => this.manageCards = elem} href="#manage-cards" aria-controls="manage-cards" role="tab"
                                       data-toggle="tab">MANAGE CARDS</a>
                                </li>
                                <li role="presentation">
                                    <a id='shareCards' ref={(elem) => this.shareCards = elem} href="#share-cards" aria-controls="share-cards" role="tab" data-toggle="tab">SHARE CARDS</a>
                                </li>
                            </ul>
                        </div>

                        {/* Tab panes */}
                        <div className="tab-content" ref={(elem) => this.tabContent = elem}>

                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default ContentHowToUse