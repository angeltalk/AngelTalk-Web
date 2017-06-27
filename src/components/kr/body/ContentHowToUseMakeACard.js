import React, { Component } from 'react'

class ContentHowToUseMakeACard extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane active" id="make-a-card">
                <div className="video center-block embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/9gHX7CNjeVc" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="center-block">실물 사진과 실제 음성으로 카드를 만들어 보세요</p>
                <pre className="main center-block">
                        아이가 좋아하는 음식이나 물건이 있나요? 사진을 찍어 카드에 저장하세요.
                        엄마의 음성이나 같은 성별의 또래 목소리로 직접 녹음하면 아이들이 더 좋아해요.


                        i. 사진을 찍을 대상을 준비합니다.

                        ii. 앱을 실행하기 전에 아이가 잘 알아듣는 단어로 카드 이름을 정하시고,
                            실제 녹음하기 전에 미리 카드 이름 말하는 걸 연습해 보세요.

                        iii. 엔젤톡 앱을 실행하고, 원하는 카테고리를 선택하세요.

                        iv. “새 카드 만들기” 버튼을 눌러 카드 만들기를 시작하세요.
                    </pre>
                <pre className="under center-block">
                    * 새 카드 만들기를 완료하기에 시간이 부족하거나, 주변 상황이 새 카드 만들기를 허락하지 않을 수 있죠.
                      그때에는 스마트폰의 카메라 앱을 사용해서 원하는 물건의 사진을 찍어두세요.
                      '사진 선택' 기능으로 갤러리의 사진을 카드에 추가할 수 있어요.
                </pre>
            </div>
        )
    }
}

export default ContentHowToUseMakeACard
