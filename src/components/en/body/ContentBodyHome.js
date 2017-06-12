import React, { Component } from 'react'
import ContentBodyBanners from './ContentBodyBanners.js'
import ContentBodyFeatures from './ContentBodyFeatures.js'
import ContentBodyVideo from './ContentBodyVideo.js'

class ContentBodyHome extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.windowScrollEvent)
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
            <div id="contents_body">
                <ContentBodyBanners/>
                <ContentBodyFeatures/>
                <ContentBodyVideo/>
            </div>
        )
    }
}

export default ContentBodyHome