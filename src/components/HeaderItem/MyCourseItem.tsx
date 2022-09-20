import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import { MyCourseItemContainer } from './styled'

const MyCourseItem = () => {
    return (
        <MyCourseItemContainer>
            <div>
                <img src={images.reactThumb} className="thumbnail" alt="" />
            </div>
            <div className="course_detail">
                <h3>
                    <Link to="/">Xây Dựng Website với ReactJS </Link>
                </h3>

                <p>Học cách đây ba tháng trước</p>
                <div className="progressBar"></div>
            </div>
        </MyCourseItemContainer>
    )
}

export default MyCourseItem
