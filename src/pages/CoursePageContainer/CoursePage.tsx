import { CheckOutlined, ConsoleSqlOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useContext } from 'react'
import { CourseDetailItem } from '../../components/Course'
import { AppContext } from '../../context/AppContext'
import {
    ButtonStyled,
    CouresPageContainer,
    CourseContent,
    CourseDetailList,
    CourseHeadWrapper,
    SignUpBtn,
    Text,
    TitleStyled
} from './styled'

const CoursePage = () => {
    const { numberActive, setNumberActive } = useContext(AppContext)
    const handleClick = () => {
        if (numberActive == 2) {
            setNumberActive(0)
        } else {
            setNumberActive(2)
        }
    }
    const isActiveAll = numberActive == 2
    return (
        <CouresPageContainer>
            <div className="courseDetail">
                <div>
                    <TitleStyled size="3.2rem">HTML, CSS từ Zero đến Hero</TitleStyled>
                    <Text>
                        Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.
                    </Text>
                </div>
                <div>
                    <TitleStyled>Bạn sẽ học được gì?</TitleStyled>
                    <CourseDetailList>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Biết cách xây dựng giao diện web với HTML,
                            CSS
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Biết cách đặt tên class CSS theo chuẩn BEM
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Làm chủ Flexbox khi dựng bố cục website
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Sở hữu 2 giao diện web khi học xong khóa học
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Biết cách tự tạo động lực cho bản thân
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Biết cách làm giao diện web responsive
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Biết cách tự tạo động lực cho bản thân
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Biết cách tự học những kiến thức mới
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Học được cách làm UI chỉn chu, kỹ tính
                        </li>
                        <li>
                            <CheckOutlined className="icon"></CheckOutlined>Nhận chứng chỉ khóa học do F8 cấp
                        </li>
                    </CourseDetailList>
                </div>
                <div>
                    <TitleStyled>Nội dung khóa học</TitleStyled>
                    <CourseHeadWrapper>
                        <div>
                            <ul>
                                <li>
                                    <strong>13</strong>
                                    <span> chương</span>
                                </li>
                                <li>
                                    <strong>163</strong>
                                    <span> bài học</span>
                                </li>
                                <li>
                                    <span>Thời lượng </span>
                                    <strong> 29 giờ 57 phút</strong>
                                </li>
                            </ul>
                        </div>
                        <ButtonStyled onClick={handleClick} type="text">
                            {isActiveAll ? 'Thu nhỏ ' : 'Mở rộng '}tất cả
                        </ButtonStyled>
                    </CourseHeadWrapper>
                    <CourseContent>
                        <CourseDetailItem />
                        <CourseDetailItem />
                    </CourseContent>
                </div>
            </div>
            <div className="courseView">
                <div className="item">
                    <div className="coursePreview">
                        <svg width="50" height="50" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.125 7.375C11.3438 7.5 11.5 7.75 11.5 8C11.5 8.28125 11.3438 8.53125 11.125 8.65625L6.625 11.4062C6.40625 11.5312 6.09375 11.5625 5.875 11.4062C5.625 11.2812 5.5 11.0312 5.5 10.75V5.25C5.5 5 5.625 4.75 5.875 4.625C6.09375 4.46875 6.40625 4.46875 6.625 4.625L11.125 7.375ZM6.5 5.71875V10.3125L10.25 8L6.5 5.71875ZM0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8ZM8 15C11.8438 15 15 11.875 15 8C15 4.15625 11.8438 1 8 1C4.125 1 1 4.15625 1 8C1 11.875 4.125 15 8 15Z"
                                fill="#808B9A"
                            />
                        </svg>

                        <p>Xem giới thiệu khóa học</p>
                    </div>
                    <h5>Miễn phí</h5>
                    <SignUpBtn type="text">ĐĂNG KÝ HỌC</SignUpBtn>
                    <ul>
                        <li>
                            <span>Trình độ cơ bản</span>
                        </li>
                        <li>
                            <span>Tổng số 163 bài học</span>
                        </li>
                        <li>
                            <span>Thời lượng 29 giờ 57 phút</span>
                        </li>
                        <li>
                            <span>Học mọi lúc, mọi nơi</span>
                        </li>
                    </ul>
                </div>
            </div>
        </CouresPageContainer>
    )
}

export default CoursePage
