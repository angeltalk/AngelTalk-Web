import React, { Component } from 'react'
import HeaderAngelTalkLogo from './HeaderAngelTalkLogo.js'
import HeaderUseCaseContent from './HeaderUseCaseContent.js'
import HeaderArrowButton from './HeaderArrowButton.js'

class HeaderUseCase extends Component {

    render() {
        return (
            <div>
                <HeaderAngelTalkLogo/>
                <HeaderUseCaseContent/>
                <HeaderArrowButton/>
            </div>
        )
    }
}

export default HeaderUseCase
