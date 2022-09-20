import { BellFilled, NotificationFilled, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Col, Dropdown, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import { Notification } from '../../components/HeaderItem'
import MyCourse from '../../components/HeaderItem/MyCourse'
import { Image } from '../../components/Image'
import { AppContext } from '../../context/AppContext'
import { ButtonStyled, InputStyled, PublishButton, RowStyled, SignInCol } from './headerstyled'
const HeaderWriteBlog = ({ canPublish }: { canPublish: boolean }) => {
    const { isUser } = React.useContext(AppContext)
    const [isNotiOn, setIsNotiOn] = React.useState(false)
    const [isMycourse, setIsMycourse] = React.useState(false)
    return (
        <RowStyled wrap={false}>
            <Col span={8}>
                <Link to="/">
                    <Image img={images.logoImg} type="logo" size="mini" />
                </Link>
                <Typography.Text className="text" style={{ fontWeight: 550, width: '100px' }}>
                    Học Lập Trình Để Đi Làm
                </Typography.Text>
            </Col>
            <Col span={8}></Col>

            <SignInCol span={8}>
                <Row justify="end">
                    {isUser ? (
                        <div className="userBlock">
                            <PublishButton disabled={!canPublish}>Xuất bản</PublishButton>
                            <div>
                                <Button
                                    onBlur={() => setIsMycourse(false)}
                                    onClick={() => setIsMycourse(!isMycourse)}
                                    className="myCourseBtn"
                                    type="text"
                                >
                                    Khóa học của tôi
                                </Button>
                                <MyCourse show={isMycourse} />
                            </div>
                            <div>
                                <BellFilled
                                    onBlur={() => setIsNotiOn(false)}
                                    onClick={() => setIsNotiOn(!isNotiOn)}
                                    className="icon"
                                />
                                <Notification show={isNotiOn} />
                            </div>
                            <div>
                                <UserOutlined className="icon" />
                            </div>
                        </div>
                    ) : (
                        <ButtonStyled>Đăng nhập</ButtonStyled>
                    )}
                </Row>
            </SignInCol>
        </RowStyled>
    )
}

export default HeaderWriteBlog
