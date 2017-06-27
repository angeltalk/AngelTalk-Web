import React, { Component } from 'react'

class FooterBottom extends Component {

    componentDidMount() {
        this.openMeetOurTeam.addEventListener('click', ()=>{
            window.open('kr/popup/meet_our_team.html' ,'','width=900,height=1000')
        })
        this.openPrivacyPolicy.addEventListener('click', ()=>{
            window.open('kr/popup/privacy_policy.html' ,'','width=900,height=1000')
        })

    }

   render() {
       return(
           <div className="container footer-bottom">
               <div className="row center-block">
                   <div className="col-sm-12 col-md-6">
                       <p id='openMeetOurTeam' ref={(elem)=>this.openMeetOurTeam=elem}>ANGELTALK DEVS</p>
                   </div>
                   <div className="col-sm-12 col-md-6">
                       <ul className="list">
                           <li>Copyrights © 2017 All Rights Reserved</li>
                           <li><span id='openPrivacyPolicy' ref={(elem)=>this.openPrivacyPolicy=elem}>Privacy Policy</span></li>
                       </ul>
                   </div>
               </div>
           </div>
       )
   }
}

export default FooterBottom
