import React, { Component } from 'react'
import HeaderAngelTalkLogo from './HeaderAngelTalkLogo.js'
import HeaderHowToUseContent from './HeaderHowToUseContent.js'
import HeaderArrowButton from './HeaderArrowButton.js'

class HeaderHowToUse extends Component {

    render() {
        return (
            <div>
                <HeaderAngelTalkLogo/>
                <HeaderHowToUseContent/>
                <HeaderArrowButton/>
            </div>
        )
    }
}

export default HeaderHowToUse
