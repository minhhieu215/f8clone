import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'
import { ButtonCourse, CourseContainer, CourseImg, UserPost } from './styled'
interface IProps {
    courseName: string
    price?: string
    numberMember?: string
    userAvatar?: string
    userName?: string
    timeToRead?: string
}
const Course: React.FC<IProps> = ({ courseName, price, numberMember, userAvatar, userName, timeToRead }) => {
    return (
        <CourseContainer>
            <CourseImg>
                <div className="overlay">
                    <ButtonCourse>Xem khóa học</ButtonCourse>
                </div>
            </CourseImg>
            <h1 style={{ margin: '10px 0' }}>{courseName}</h1>
            {price && <p className="price">{price}đ</p>}
            {numberMember && (
                <p className="numberMember">
                    <UserOutlined style={{ marginRight: '5px' }} />
                    {numberMember}
                </p>
            )}
            {userName && (
                <UserPost>
                    <Avatar src={userAvatar} />
                    <span className="userName">{userName}</span>
                    <span className="timeToRead">{timeToRead} phút đọc</span>
                </UserPost>
            )}
        </CourseContainer>
    )
}

export default Course
