import React, { Component } from 'react'

class HeaderArrowButton extends Component {

    componentDidMount() {
        this.imgArrow.addEventListener('click', this.scrollToFirstContent)
    }

    componentWillUnmount() {
        this.imgArrow.removeEventListener('click', this.scrollToFirstContent)
    }

    scrollToFirstContent = () => {
        window.scrollTo(0, document.getElementById('contents_body').offsetTop - 87)
    }

    render() {
        return (
            <button className="center-block">
                <img id="img_arrow" className="arrow-down center-block" src="../../img/ico-arrowdown-lg.png" alt="" ref={(elem)=>this.imgArrow = elem}/>
            </button>
        )
    }
}

export default  HeaderArrowButton
