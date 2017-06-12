import React, { Component } from 'react'
import HeaderAngelTalkLogo from './HeaderAngelTalkLogo.js'
import HeaderHomeContent from './HeaderHomeContent.js'
import HeaderArrowButton from './HeaderArrowButton.js'

class HeaderBodyEN extends Component {
    render() {
        return (
            <div id="header_body" className="container">
                <HeaderAngelTalkLogo/>
                <HeaderHomeContent/>
                <HeaderArrowButton/>
            </div>
        )
    }
}

export default HeaderBodyEN
