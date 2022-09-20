import React from 'react'
import MyCourseItem from './MyCourseItem'
import { Container } from './styled'

const MyCourse = ({ show }: { show: boolean }) => {
    return (
        <Container show={show}>
            <div className="headerWrapper">
                <h1>Khóa học của tôi</h1>
            </div>
            <div>
                <MyCourseItem />
                <MyCourseItem />
            </div>
        </Container>
    )
}

export default MyCourse
