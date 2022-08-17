import React from 'react'
import { CourseContainer, CourseImg } from './styled'

const Course = () => {
    return (
        <CourseContainer>
            <CourseImg />
            <h1>HTML CSS Pro</h1>
            <p className="price">699.000đ</p>
        </CourseContainer>
    )
}

export default Course
