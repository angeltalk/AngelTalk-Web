import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HeaderHome from './../header/HeaderHome.js'
import HeaderHowToUse from './../header/HeaderHowToUse.js'
import HeaderUseCase from "./../header/HeaderUseCase"
import ContentBodyHome from './../body/ContentBodyHome.js'
import ContentHowToUse from './../body/ContentHowToUse.js'
import ContentUseCase from "./../body/ContentUseCase"
import Footer from './../footer/Footer.js'
import AppInEnglish from './../../en/App.js'
import AppInKorean from './../../kr/App.js'

class NavigationBar extends Component {

    componentDidMount() {
        this.textLogo.addEventListener('click', this.loadHome)
        this.menuHome.addEventListener('click', this.loadHome)
        this.menuHowToUse.addEventListener('click', this.loadHowToUse)
        this.menuUseCase.addEventListener('click', this.loadUseCase)
        this.languageDropdownMenu.addEventListener('click', this.toggleDropdownMenu)
        this.languageEnglishItem.addEventListener('click', this.loadEnglishPage)
        this.languageEnglishMobileItem.addEventListener('click', this.loadEnglishPage)
        this.languageKoreanItem.addEventListener('click',this.loadKoreanPage)
        this.languageKoreanMobileItem.addEventListener('click', this.loadKoreanPage)

        switch(this.props.selectedMenu) {
            case 'home':
                this.menuHome.classList.add('active')
                this.menuHowToUse.classList.remove('active')
                this.menuUseCase.classList.remove('active')
                break
            case 'howToUse':
                this.menuHowToUse.classList.add('active')
                this.menuHome.classList.remove('active')
                this.menuUseCase.classList.remove('active')
                break
            case 'useCase':
                this.menuUseCase.classList.add('active')
                this.menuHome.classList.remove('active')
                this.menuHowToUse.classList.remove('active')
                break
            default :
                this.menuHome.classList.add('active')
                this.menuHowToUse.classList.remove('active')
                this.menuUseCase.classList.remove('active')
                break
        }
    }

    loadHome = () => {
        document.body.innerHTML = "<div id='root'></div>"
        let result = ReactDOM.render(
            <div>
                <header id="header-main">
                    <div className="container">
                        <NavigationBar selectedMenu="home"/>
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

    loadHowToUse = () => {
        document.body.innerHTML = "<div id='root'></div>"
        let result = ReactDOM.render(
            <div>
                <header id="header-main">
                    <div className="container">
                        <NavigationBar selectedMenu="howToUse"/>
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

    loadUseCase = () => {
        document.body.innerHTML = "<div id='root'></div>"
        let result = ReactDOM.render(
            <div>
                <header id="header-main">
                    <div className="container">
                        <NavigationBar selectedMenu="useCase"/>
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

    toggleDropdownMenu = () => {
        let languageDropdownMenu = document.getElementById('language_dropdown_menu')
        if(!languageDropdownMenu) {
            languageDropdownMenu.classList.toggle('open')
        }
    }

    loadEnglishPage = () => {
        ReactDOM.render(
            <AppInEnglish/>,
            document.getElementById('root')
        )
    }

    loadKoreanPage = () => {
        ReactDOM.render(
            <AppInKorean/>,
            document.getElementById('root')
        )
    }

    render() {
        return (
            <nav id="nav_top" className="navbar" >
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a id='text_logo' ref={(elem)=>this.textLogo=elem} className="navbar-brand" href="#"><img src="../img/img-textlogo.png" alt="AngelTalk Logo"/></a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav" id="ul_nav">
                            <li>
                                <a className="active nav_menu" id="menu_home" ref={(elem)=>this.menuHome=elem} href="#">홈<br/><span className="second-line">Welcome</span></a>
                            </li>
                            <li>
                                <a id="menu_how_to_use" className="nav_menu" ref={(elem)=>this.menuHowToUse=elem} href="#">사용 방법<br/><span className="second-line">Tutorials</span></a>
                            </li>
                            <li>
                                <a id="menu_use_case" className="nav_menu" ref={(elem)=>this.menuUseCase=elem} href="#">활용 사례<br/><span className="second-line">Use Cases</span></a>
                            </li>
                            <li className="dropdown">
                                <a id="language_dropdown" href="#" className="dropdown-toggle nav_menu" data-toggle="dropdown" role="button" aria-haspopup="true"
                                   aria-expanded="false">언어(Languages)<span className="caret"></span><br/><span
                                    className="second-line">English </span></a>
                                <ul id="language_dropdown_menu" ref={(elem)=>this.languageDropdownMenu=elem} className="dropdown-menu">
                                    <li ref={(elem)=>this.languageEnglishItem=elem}>ENGLISH</li>
                                    <li ref={(elem)=>this.languageKoreanItem=elem}>한국어</li>
                                </ul>
                            </li>
                            <li className="mobile-language-list" ref={(elem)=>this.languageEnglishMobileItem=elem}>ENGLISH</li>
                            <li className="mobile-language-list" ref={(elem)=>this.languageKoreanMobileItem=elem}>한국어</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar
