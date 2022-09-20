import { ArrowRightOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { coursesConfig, postConfig } from '../../config'
import Course from '../Course'
import { ButtonStyled, CourseContainer, HeadingWrap, Title } from './styled'
const coursePro = coursesConfig.filter((course) => course.type?.includes('pro'))
const courseFront = coursesConfig.filter((course) => course.type?.includes('frontend'))
const courseBack = coursesConfig.filter((course) => course.type?.includes('backend'))
const CourseBlock = () => {
    return (
        <div style={{ paddingInline: '32px' }}>
            <HeadingWrap>
                <Title>Khóa học Pro</Title>
                <ButtonStyled type="text">
                    <Link to="/courses">
                        <Link to="/courses">
                            <span> Xem chi tiết </span>
                        </Link>
                    </Link>
                    <ArrowRightOutlined className="icon" />
                </ButtonStyled>
            </HeadingWrap>
            <CourseContainer>
                {coursePro.map((course) => (
                    <Course link={course.link} courseName={course.courseName} price={course.price} />
                ))}
            </CourseContainer>
            <HeadingWrap>
                <Title>Lộ trình front end</Title>
                <ButtonStyled type="text">
                    <Link to="/courses">
                        <span> Xem chi tiết </span>
                    </Link>
                    <ArrowRightOutlined className="icon" />
                </ButtonStyled>
            </HeadingWrap>
            <CourseContainer>
                {courseFront.map((course) => (
                    <Course
                        link={course.link}
                        courseName={course.courseName}
                        price={course.price}
                        numberMember={course.numberMember}
                    />
                ))}
            </CourseContainer>
            <HeadingWrap>
                <Title>Lộ trình Backend</Title>
                <ButtonStyled type="text">
                    <Link to="/courses">
                        <span> Xem chi tiết </span>
                    </Link>
                    <ArrowRightOutlined className="icon" />
                </ButtonStyled>
            </HeadingWrap>
            <CourseContainer>
                {courseBack.map((course) => (
                    <Course
                        link={course.link}
                        courseName={course.courseName}
                        price={course.price}
                        numberMember={course.numberMember}
                    />
                ))}
            </CourseContainer>
            <HeadingWrap>
                <Title>Bài viết nổi bật</Title>
                <ButtonStyled type="text">
                    <Link to="/courses">
                        <span> Xem chi tiết </span>
                    </Link>
                    <ArrowRightOutlined className="icon" />
                </ButtonStyled>
            </HeadingWrap>
            <CourseContainer>
                {postConfig.map((post, index) => (
                    <Course
                        courseName={post.courseName}
                        userName={post.userName}
                        userAvatar={post.userAvatar}
                        timeToRead={post.timeToRead}
                    />
                ))}
            </CourseContainer>
        </div>
    )
}

export default CourseBlock
