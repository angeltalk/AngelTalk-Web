import React, { Component } from 'react'


class ContentUseCaseVideo extends Component {
    render() {
        return(
            <section className="video">
                <div className="row no-side-margin center-block">
                    <div className="container video embed-responsive col-sm-12">
                        <iframe src="https://www.youtube.com/embed/Cot5eMEWpx8" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentUseCaseVideo
