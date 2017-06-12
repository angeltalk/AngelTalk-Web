import React, { Component } from 'react'

class FooterTitle extends Component {
   render() {
       return(
           <div className="container footer-title">
               <p>Any suggestions, questions, bug reports, and other inquiries are very welcome!</p>
               <div className="feature-items">
                   <div className="row center-block">
                       <div className="col-md-7">
                           <div className="feature-item">
                               <div className="row">
                                   <div className="col-md-1">
                                       <img src="../img/ico-location.png" className="location-icon"/>
                                   </div>
                                   <div className="col-md-10">
                                       <p>125 Olympic-ro 35-gil <br/> Songpa-gu, Seoul 05510, Korea</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-5">
                           <a href="mailto:act.angeltalk@gmail.com">
                               <div className="feature-item">
                                   <div className="row">
                                       <div className="col-sm-1 col-md-1">
                                           <img src="../img/ico-email.png" className="email-icon"/>
                                       </div>
                                       <div className="col-sm-8 col-md-10">
                                           <p>&nbspact.angeltalk@gmail.com</p>
                                       </div>
                                   </div>
                               </div>
                           </a>
                       </div>
                   </div>
                   <a href="https://docs.google.com/forms/d/1jaWhUQse_1RmqOCG2vQ_oW3QNCGv4AYowrhS6BOqNnU/edit" target="_blank">
                       <img className="feedback-button center-block" src="../img/btn-feedback.png"/>
                   </a>

               </div>
           </div>
       )
   }
}

export default FooterTitle
