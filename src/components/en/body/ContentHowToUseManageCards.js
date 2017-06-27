import React, { Component } from 'react'

class ContentHowToUseManageCards extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane" id="manage-cards">
                <div className="video center-block embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/KvusKDHgGSc" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="center-block">Manage cards easily</p>
                <pre className="main center-block">
                        <span>SHOW/HIDE</span>
                        <br/>At a particular time, you may think that some cards are not appropriate to show them to your child.
                         Instead of deleting those cards permanently, you can just hide them so that your child are not able to see them in AngelTalk.<br /><br />
                        <span>CHANGE SORT ORDER</span>
                        <br/>As your child grows, his or her interest changes. You can place the most attractive card in upper position and lower the position of less intersting cards. Your child doesn’t need to swipe too many cards to find a proper one.<br /><br />
                        <span>CHANGE CARD NAME, VOICE, etc.</span>
                        <br/>It’s easy and simple. It takes only a few second to change those.
                    </pre>
                <pre className="under center-block"></pre>
            </div>
        )
    }
}

export default ContentHowToUseManageCards
