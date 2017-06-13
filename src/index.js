import React from 'react'
import ReactDOM from 'react-dom'
import AppInEnglish from './components/en/App.js'
import AppInKorean from './components/kr/App.js'

window.addEventListener('load', () => {

    var browserLocale = getLang()

    if((browserLocale.toLowerCase().indexOf("ko") > -1) || (browserLocale.toLowerCase().indexOf("kr") > -1)) {
        ReactDOM.render(
            <AppInEnglish/>,
            document.getElementById('root')
        )
    }else{
        ReactDOM.render(
            <AppInEnglish/>,
            document.getElementById('root')
        )
    }

    function getLang(){
        if (window.navigator.languages !== undefined) {
            return window.navigator.languages[0]
        }else{
            if(window.navigator.language === undefined) {
                return window.navigator.browserLanguage
            } else {
                return window.navigator.language
            }
        }
    }
})