import React, { Component } from 'react'

class FooterTitle extends Component {
   render() {
       return(
           <div className="container footer-title">
               <p>앱 개선 의견이나 문의 사항이 있으면 언제든지 저희에게 의견 보내주세요. 사용 중 불편하신 점, 앱 오류, 아이디어 어떤 것도 좋습니다.</p>
               <div className="feature-items">
                   <div className="row center-block">
                       <div className="col-md-7">
                           <div className="feature-item">
                               <div className="row">
                                   <div className="col-md-1">
                                       <img src="../img/ico-location.png" className="location-icon" alt=""/>
                                   </div>
                                   <div className="col-md-10">
                                       <p>서울 송파구 올림픽로35길 125</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-md-5">
                           <a href="mailto:act.angeltalk@gmail.com">
                               <div className="feature-item">
                                   <div className="row">
                                       <div className="col-sm-1 col-md-1">
                                           <img src="../img/ico-email.png" className="email-icon" alt=""/>
                                       </div>
                                       <div className="col-sm-8 col-md-10">
                                           <p> act.angeltalk@gmail.com</p>
                                       </div>
                                   </div>
                               </div>
                           </a>
                       </div>
                   </div>
                   <a href="https://docs.google.com/forms/d/1jaWhUQse_1RmqOCG2vQ_oW3QNCGv4AYowrhS6BOqNnU/edit" target="_blank">
                       <img className="feedback-button center-block" src="../img/btn-feedback.png" alt=""/>
                   </a>

               </div>
           </div>
       )
   }
}

export default FooterTitle
