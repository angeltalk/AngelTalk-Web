import React, { Component } from 'react'
import ContentBodyBanners from './ContentBodyBanners.js'
import ContentBodyFeatures from './ContentBodyFeatures.js'
import ContentBodyVideo from './ContentBodyVideo.js'

class ContentBodyHome extends Component {
    render() {
        return (
            <div id="contents_body">
                <ContentBodyBanners/>
                <ContentBodyFeatures/>
                <ContentBodyVideo/>
            </div>
        )
    }
}

export default ContentBodyHome