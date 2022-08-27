import React from 'react'
import { CourseBlock } from '../../components/CourseBlock'
import { Container, TitleStyled } from './styled'

const CoursePageContainer = () => {
    return (
        <Container>
            <div>
                <TitleStyled size="3.2rem">Khóa học</TitleStyled>
                <p>
                    Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung
                    dễ hiểu.
                </p>
            </div>
            <CourseBlock />
        </Container>
    )
}

export default CoursePageContainer
