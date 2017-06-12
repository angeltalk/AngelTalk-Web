import React, { Component } from 'react'

class ContentBodyVideo extends Component {
    render() {
        return (
            <section className="video">
                <div className="row no-side-margin center-block">
                    <div className="container video embed-responsive col-sm-12">
                        <iframe src="https://www.youtube.com/embed/ZjRpfmXDm1k" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentBodyVideo
