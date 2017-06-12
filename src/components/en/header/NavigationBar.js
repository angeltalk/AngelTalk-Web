import React, { Component } from 'react'
import App from './../App.js'

class NavigationBar extends Component {

    componentDidMount() {
        this.textLogo.addEventListener('click', ()=>{
            this.inActiveAllMenu()
            this.menuHome.classList.add('active')

            this.menuHome.addEventListener('click', App.loadHome())
            this.menuHowToUse.addEventListener('click', App.loadHowToUse())
            this.menuUseCase.addEventListener('click', App.loadUseCase())
        })
    }

    inActiveAllMenu = ()=>{
        document.getElementsByClassName('nav_menu')
        Array.prototype.forEach((elem)=>{
            elem.classList.remove('active')
        })
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
                                <a className="active nav_menu" id="menu_home" ref={(elem)=>this.menuHome=elem} href="#">HOME<br/><span className="second-line">Welcome</span></a>
                            </li>
                            <li>
                                <a id="menu_how_to_use" className="nav_menu" ref={(elem)=>this.menuHowToUse=elem} href="#">HOW TO USE<br/><span className="second-line">Tutorials</span></a>
                            </li>
                            <li>
                                <a id="menu_use_case" className="nav_menu" ref={(elem)=>this.menuUseCase=elem} href="#">HOW OTHERS USE<br/><span className="second-line">Use Cases</span></a>
                            </li>
                            <li className="dropdown">
                                <a id="language_dropdown" href="#" className="dropdown-toggle nav_menu" data-toggle="dropdown" role="button" aria-haspopup="true"
                                   aria-expanded="false">LANGUAGES<span className="caret"></span><br/><span
                                    className="second-line">English </span></a>
                                <ul id="language_dropdown_menu" ref={(elem)=>this.languageDropdownMenu=elem} className="dropdown-menu">
                                    <li><a href="../en">ENGLISH</a></li>
                                    <li><a href="../kr">한국어</a></li>
                                </ul>
                            </li>
                            <li className="mobile-language-list"><a href="../en">ENGLISH</a></li>
                            <li className="mobile-language-list"><a href="../kr">한국어</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavigationBar
