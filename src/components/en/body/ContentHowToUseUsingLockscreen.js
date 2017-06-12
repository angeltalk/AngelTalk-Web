import React, { Component } from 'react'

class ContentHowToUseUsingLockscreen extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane" id="using-lockscreen">
                <div className="video center-block embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/nh2tqwlmiCE" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="center-block">Show cards on lock screen of your smartphone</p>
                <pre className="main center-block">
                        Worrying about abuse of smartphone by your child?
                        Our app uses the lock screen of your smartphone. You can hand it to your child, anytime you want.


                        i. Pull down the notification drawer of your smartphone.

                        ii. Find the AngelTalk among a bunch of bars, and press the ‘ON’ button in the AngelTalk bar.

                        iii. Now, AngelTalk app will appear on the lock screen. You can hand your smartphone to your child.
                    </pre>
                <pre className="under center-block">
                        * If you are not with your child, then press the ‘OFF’ button in the notification bar, it won’t appear on the lock screen.
                    </pre>
            </div>
        )
    }
}

export default ContentHowToUseUsingLockscreen