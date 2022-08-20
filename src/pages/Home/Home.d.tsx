import { ArrowRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { Course } from '../../components/Course'
import { coursesConfig, postConfig } from '../../config'
import MySlider from './Slider/MySlider'
import { ButtonStyled, CourseContainer, HeadingWrap, Title } from './styled'
const Home = () => {
    const coursePro = coursesConfig.filter((course) => course.type?.includes('pro'))
    const courseFront = coursesConfig.filter((course) => course.type?.includes('frontend'))
    const courseBack = coursesConfig.filter((course) => course.type?.includes('backend'))
    return (
        <div style={{ marginRight: '32px' }}>
            <MySlider />
            <div style={{ paddingInline: '32px' }}>
                <HeadingWrap>
                    <Title>Khóa học Pro</Title>
                    <ButtonStyled type="text">
                        <span> Xem chi tiết </span>
                        <ArrowRightOutlined className="icon" />
                    </ButtonStyled>
                </HeadingWrap>
                <CourseContainer>
                    {coursePro.map((course) => (
                        <Course courseName={course.courseName} price={course.price} />
                    ))}
                </CourseContainer>
                <HeadingWrap>
                    <Title>Lộ trình front end</Title>
                    <ButtonStyled type="text">
                        <span> Xem chi tiết </span>
                        <ArrowRightOutlined className="icon" />
                    </ButtonStyled>
                </HeadingWrap>
                <CourseContainer>
                    {courseFront.map((course) => (
                        <Course
                            courseName={course.courseName}
                            price={course.price}
                            numberMember={course.numberMember}
                        />
                    ))}
                </CourseContainer>
                <HeadingWrap>
                    <Title>Lộ trình Backend</Title>
                    <ButtonStyled type="text">
                        <span> Xem chi tiết </span>
                        <ArrowRightOutlined className="icon" />
                    </ButtonStyled>
                </HeadingWrap>
                <CourseContainer>
                    {courseBack.map((course) => (
                        <Course
                            courseName={course.courseName}
                            price={course.price}
                            numberMember={course.numberMember}
                        />
                    ))}
                </CourseContainer>
                <HeadingWrap>
                    <Title>Bài viết nổi bật</Title>
                    <ButtonStyled type="text">
                        <span> Xem chi tiết </span>
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
        </div>
    )
}

export default Home
