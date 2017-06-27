import React, { Component } from 'react'

class ContentHowToUseManageCards extends Component {
    render() {
        return (
            <div role="tabpanel" className="tab-pane" id="manage-cards">
                <div className="video center-block embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/KvusKDHgGSc" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="center-block">만들어진 카드들의 관리가 쉬워요</p>
                <pre className="main center-block">
                        <span>카드 보이기/숨기기</span>
                        <br/>카드들 중 아이에게 지금은 보이고 싶지 않은 카드가 있나요? 그렇다면 카드를 삭제하지 마시고, ‘숨기기/보이기' 기능을 이용해 보세요.
                        숨긴 카드는 아이가 보는 화면에서 더이상 보이지 않게 됩니다.
                        나중에 다시 보이게 하고 싶으면 ‘보이기’로 바꿔주면 돼요.<br/><br/>
                        <span>카드 순서 바꾸기</span>
                        <br/>아이가 자라면서 관심을 가지고 사용하는 어휘들이 바뀌게 됩니다.
                        아이가 지금 가장 관심있는 카드를 앞으로 옮겨 놓으시고, 관심이 덜한 카드는 뒤로 옮기세요.
                        원하는 카드를 빠르게 찾을 수 있어요<br/><br/>
                        <span>카드 사진, 이름, 음성 바꾸기</span>
                        <br/>카드를 만들긴 했는데, 사진을 바꾸고 싶으신가요?
                        아이의 어휘가 늘어나서 카드 이름을 좀 더 구체적인 단어로 바꾸고 싶으신가요?
                        엔젤톡에서는 쉽게 이미 만들어져 있는 카드의 사진, 이름, 음성을 바꿀 수 있어요.
                    </pre>
                <pre className="under center-block"></pre>
            </div>
        )
    }
}

export default ContentHowToUseManageCards
