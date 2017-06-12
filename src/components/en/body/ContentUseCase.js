import React, { Component } from 'react'
import ContentUseCaseIntroduce from './ContentUseCaseIntroduce.js'
import ContentUseCaseVideo from './ContentUseCaseVideo.js'
import ContentUseCaseMomsDiary from './ContentUseCaseMomsDiary.js'

class ContentUseCase extends Component {
    render() {
        return(
            <div>
                <ContentUseCaseIntroduce/>
                <ContentUseCaseVideo/>
                <ContentUseCaseMomsDiary/>
            </div>
        )
    }
}

export default ContentUseCase
