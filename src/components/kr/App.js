import React, { Component } from 'react'
import NavigationBar from './header/NavigationBar.js'
import HeaderHome from './header/HeaderHome.js'
import ContentBodyHome from './body/ContentBodyHome.js'
import Footer from './footer/Footer.js'


class App extends Component {
    render() {
        return(
            <div>
                <header id="header-main">
                    <div className="container">
                        <NavigationBar/>
                        <HeaderHome/>
                    </div>
                </header>
                <ContentBodyHome/>
                <Footer/>
            </div>
        )
    }
}

export default App


