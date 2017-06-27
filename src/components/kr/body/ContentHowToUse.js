import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ContentHowToUseMakeACard from './ContentHowToUseMakeACard.js'
import ContentHowToUseManageCards from './ContentHowToUseManageCards.js'
import ContentHowToUseShareCards from './ContentHowToUseShareCards.js'
import ContentHowToUseUsingLockscreen from './ContentHowToUseUsingLockscreen.js'

class ContentHowToUse extends Component {

    componentDidMount() {

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

        switch (this.props.selectedFeature) {
            case 'makeACard':
                this.makeACard.click()
                break
            case 'manageCards':
                this.manageCards.click()
                break
            case 'shareCards':
                this.shareCards.click()
                break
            case 'usingLockscreen':
                this.usingLockscreen.click()
                break
            default:
                this.makeACard.click()
                break
        }
    }

    render() {
        return (
            <div id="contents_body">
                <section id="tab-section" className="tab-section">
                    <div className="container">
                        {/* Nav tabs */}
                        <div className="tutorials center-block">
                            <div className="nav-tabs-area">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active">
                                        <a id='makeACard' ref={(elem) => this.makeACard = elem} href="#make-a-card" aria-controls="make-a-card" role="tab" data-toggle="tab">새 카드<br/> 만들기</a>
                                    </li>
                                    <li role="presentation" >
                                        <a id='usingLockscreen' ref={(elem) => this.usingLockscreen = elem} href="#using-lockscreen" aria-controls="using-lockscreen" role="tab" data-toggle="tab">잠금화면<br/> 설정</a>
                                    </li>
                                    <li role="presentation">
                                        <a id='manageCards' ref={(elem) => this.manageCards = elem} href="#manage-cards" aria-controls="manage-cards" role="tab"
                                           data-toggle="tab">카  드<br/>관  리</a>
                                    </li>
                                    <li role="presentation">
                                        <a id='shareCards' ref={(elem) => this.shareCards = elem} href="#share-cards" aria-controls="share-cards" role="tab" data-toggle="tab">카  드<br/>공  유<br/></a>
                                    </li>
                                </ul>
                            </div>

                            {/* Tab panes */}
                            <div className="tab-content" ref={(elem) => this.tabContent = elem}>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ContentHowToUse