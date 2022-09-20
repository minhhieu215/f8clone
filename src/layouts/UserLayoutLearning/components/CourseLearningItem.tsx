import { DownOutlined, UpOutlined } from '@ant-design/icons'
import React from 'react'
import CourseHideLearningItem from './CourseHideLearningItem'
import { Container, HideContainer } from './styled'
const CourseLearningItem = () => {
    const [isShowing, setIsShowing] = React.useState(false)
    const handleClick = () => {
        setIsShowing(!isShowing)
    }
    return (
        <>
            <Container onClick={handleClick}>
                <h3 className="title">
                    1. Bắt đầu
                    <span className="icon">{(isShowing && <UpOutlined />) || <DownOutlined />}</span>
                </h3>
                <span className="desc">5/5 | 14:36</span>
            </Container>
            <div>{isShowing && <CourseHideLearningItem />}</div>
        </>
    )
}

export default CourseLearningItem
