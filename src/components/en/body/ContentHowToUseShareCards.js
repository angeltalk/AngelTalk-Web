import React, { Component } from 'react'

class ContentHowToUseShareCards extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane" id="share-cards">
                <div className="video center-block embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/KlXQGJ1-9bM" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="center-block">Share your cards with others instantly</p>
                <pre className="main center-block">
                    <span>Scene #01</span>
                    <br/>
                    As a mom, you’ve made some cards. Your child likes those cards.  What about your husband?<br/>
                    <span>Scene #02</span>
                    <br/>
                    Your child’s language pathologist said that she taught a new word to your child today, and he seemed to wanna talk about it. So, you made a card with the picture of similar things that appeared to represent the new word. However, your child doesn’t think your card was identical to the one at the language center.
                    What should you do?<br/>
                    <span className="italic">Send your cards to them and get their cards into your app. That will resolve these problems!</span>
                </pre>
                <pre className="under center-block"></pre>
            </div>
        )
    }
}

export default ContentHowToUseShareCards