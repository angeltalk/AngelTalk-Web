import React, { Component } from 'react'

class ContentHowToUseShareCards extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane" id="share-cards">
                <div className="video center-block embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/KlXQGJ1-9bM" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="center-block">가족이나 선생님, 또는 주변 분들과 카드를 공유해 보세요</p>
                <pre className="main center-block">
                    <span>#1</span>
                    <br/>
                    엄마가 만든 카드는 엄마 스마트폰에만 존재합니다.
                    그렇다면 아빠는 동일한 카드를 아이에게 보여주기 위해 엄마와 똑같은 과정을 통해 카드를 만들어야 할까요? <br/>
                    <span>#2</span>
                    <br/>
                    언어치료사분께 연락이 왔습니다.
                    오늘 아이가 새로운 단어를 익혔고 배운 단어 카드를 아주 좋아했다고 말씀하시네요.
                    해당 단어에 해당되는 사진을 가지고 카드를 새로 만들어도, 아이는 언어치료교실에서 사용한 카드가 아니라 흥미가 없을 수 있습니다.<br/><br/>
                    아이들은 하루에도 다양한 환경속에서 많은 사람들과 의사소통을 합니다. 대화 상대에 따라 사진이 다르다면 아이가 혼란스러워할 수 있어요.<br/>
                    <span className="italic">엔젤톡의 카드 공유 기능을 사용해 보세요. 카카오톡이나 SMS 메신저 앱을 통해 쉽게 카드를 공유할 수 있어요.</span>
                </pre>
                <pre className="under center-block"></pre>
            </div>
        )
    }
}

export default ContentHowToUseShareCards