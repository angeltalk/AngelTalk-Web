import React from 'react'
import ReactDOM from 'react-dom'
import NavigationBar from './header/NavigationBar.js'
import HeaderHome from './header/HeaderHome.js'
import HeaderHowToUse from './header/HeaderHowToUse.js'
import HeaderUseCase from "./header/HeaderUseCase"
import ContentBodyHome from './body/ContentBodyHome.js'
import ContentHowToUse from './body/ContentHowToUse.js'
import ContentUseCase from "./body/ContentUseCase";
import Footer from './footer/Footer.js'

let loadHome = () => {
    document.body.innerHTML = "<div id='root'></div>"
    let result = ReactDOM.render(
        <div>
            <header id="header-main">
                <div className="container">
                    <NavigationBar/>
                    <HeaderHome/>
                </div>
            </header>
            <ContentBodyHome/>
            <Footer/>
        </div>,
        document.getElementById('root')
    )
    return result
}

let loadHowToUse = () => {
    document.body.innerHTML = "<div id='root'></div>"
    let result = ReactDOM.render(
        <div>
            <header id="header-main">
                <div className="container">
                    <NavigationBar/>
                    <HeaderHowToUse/>
                </div>
            </header>
            <ContentHowToUse/>
            <Footer/>
        </div>,
        document.getElementById('root')
    )
    return result
}

let loadUseCase = () => {
    document.body.innerHTML = "<div id='root'></div>"
    let result = ReactDOM.render(
        <div>
            <header id="header-main">
                <div className="container">
                    <NavigationBar/>
                    <HeaderUseCase/>
                </div>
            </header>
            <ContentUseCase/>
            <Footer/>
        </div>,
        document.getElementById('root')
    )
    return result
}

exports.loadHome = loadHome
exports.loadHowToUse = loadHowToUse
exports.loadUseCase = loadUseCase


