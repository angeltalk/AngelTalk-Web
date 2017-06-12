import React, { Component } from 'react'
import FooterTitle from "./FooterTitle";
import FooterBottom from "./FooterBottom";

class Footer extends Component {
   render() {
       return(
           <footer id="footer">
               <FooterTitle/>
               <FooterBottom/>
           </footer>
       )
   }
}

export default Footer
