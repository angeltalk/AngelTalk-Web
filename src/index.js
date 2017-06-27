import React from 'react'
import ReactDOM from 'react-dom'
import AppInEnglish from './components/en/App.js'
import AppInKorean from './components/kr/App.js'

window.addEventListener('load', () => {

    let browserLocale = getLang()

    if((browserLocale.toLowerCase().indexOf("ko") > -1) || (browserLocale.toLowerCase().indexOf("kr") > -1)) {
        ReactDOM.render(
            <AppInKorean/>,
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
        } else {
            if (window.navigator.language === undefined) {
                return window.navigator.browserLanguage
            } else {
                return window.navigator.language
            }
        }
    }
})

window.addEventListener('scroll', windowScrollEvent)

function windowScrollEvent() {
    let topOffset = window.scrollY
    let headerMain = document.getElementById('header-main')
    let navTop = document.getElementById('nav_top')

    if(topOffset > document.getElementById('contents_body').offsetTop - 88){
        headerMain.style.marginTop = "88px"
        navTop.classList.add("navbar-fixed-top")
        navTop.classList.add("navbar-fixed-top-inactive")
    } else {
        headerMain.style.marginTop = "0px"
        navTop.classList.remove("navbar-fixed-top-inactive")
        navTop.classList.remove("navbar-fixed-top")
    }
}