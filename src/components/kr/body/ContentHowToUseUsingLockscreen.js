import React, { Component } from 'react'

class ContentHowToUseUsingLockscreen extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane" id="using-lockscreen">
                <div className="video center-block embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/nh2tqwlmiCE" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="center-block">잠금화면에 카드들이 나타납니다</p>
                <pre className="main center-block">
                        AAC 앱을 이용하는 중에 아이가 실수로 홈버튼을 눌러 대화가 단절되는 경우가 많았죠?
                        가끔 엄마 스마트폰으로 엉뚱한 사람들에게 전화를 걸거나, 중요한 앱을 지우거나 하는 일들도 발생하곤 하죠.
                        엔젤톡을 이용하면 이런 걱정 없이 사용하실 수 있어요. 잠금화면에 엔젤톡이 나오도록 설정해 보세요.

                        i. 스마트폰 화면 상단 부분을 누른 상태에서 손가락을 화면 아래 방향로 내리면 “앱 공지/알림 창”이 표시됩니다.

                        ii. 표시된 “앱 공지/알림 창”에서 엔젤톡을 찾은 후, “ON” 버튼을 누르세요.

                        iii. 이제 엔젤톡 앱이 잠금화면에 표시됩니다.
                    </pre>
                <pre className="under center-block">
                        * 잠금화면에 엔젤톡 앱이 나오지 않도록 하려면, 위 “앱 공지/알림 창”에서 엔젤톡 “OFF” 버튼을 누르세요.
                          더 이상 잠금화면에 엔젤톡 앱이 표시되지 않아요.
                    </pre>
            </div>
        )
    }
}

export default ContentHowToUseUsingLockscreen