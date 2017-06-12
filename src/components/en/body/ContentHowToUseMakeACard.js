import React, { Component } from 'react'

class ContentHowToUseMakeACard extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane active" id="make-a-card">
                <div className="video center-block embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/9gHX7CNjeVc" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="center-block">Make your own card with real image and voice</p>
                <pre className="main center-block">
                        Use real pictures or short video clips of the things that your child want to express, and record your own voice to gain your child’s attention.


                        i. Prepare something you want to take a picture of it.

                        ii. Before running the app,  choose the name of the card carefully and practice to pronounce it correctly, so that your child can easily recognize your voice and its meaning clearly.

                        iii. Run the app on your smartphone and choose one of the existing categories where the card will be placed.

                        iv. Tap the ‘New Card’ button,  and follow the instructions.
                    </pre>
                <pre className="under center-block">
                        * In some circumstances, you might not have enough time to make the card completely.
                        Don’t worry about it. In which case just capture the picture of what you want by using your camera app.
                        Later, you can make the card with that picture.
                    </pre>
            </div>
        )
    }
}

export default ContentHowToUseMakeACard
