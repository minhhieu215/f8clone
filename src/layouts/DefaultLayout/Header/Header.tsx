import { BellFilled, NotificationFilled, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Col, Dropdown, Row, Tooltip, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../../assets/images'
import { Notification } from '../../../components/HeaderItem'
import MyCourse from '../../../components/HeaderItem/MyCourse'
import { Image } from '../../../components/Image'
import { AppContext } from '../../../context/AppContext'
import { AuthContext } from '../../../context/AuthContext'
import { logOut } from '../../../firebase/service'
import { ButtonStyled, InputStyled, RowStyled, Settings, SignInCol } from './styled'
const Header = () => {
    const { isUser } = React.useContext(AppContext)
    const [isNotiOn, setIsNotiOn] = React.useState(false)
    const [isMycourse, setIsMycourse] = React.useState(false)
    const { user } = React.useContext(AuthContext)
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
            <Col span={8}>
                <InputStyled
                    prefix={<SearchOutlined className="icon" />}
                    placeholder="Tìm kiếm khóa học,bài viết,video ,.."
                />
            </Col>

            <SignInCol span={8}>
                <Row justify="end">
                    {isUser ? (
                        <div className="userBlock">
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
                            <Settings>
                                <UserOutlined className="icon" />
                                <div className="settingBlock">
                                    <div className="header">
                                        <Avatar>{user?.displayName?.charAt(0).toUpperCase()}</Avatar>
                                        <h1>{user?.displayName?.toUpperCase()}</h1>
                                    </div>
                                    <hr />
                                    <ul>
                                        <li>Viết blog</li>
                                        <li onClick={() => logOut()}>Đăng xuất</li>
                                    </ul>
                                </div>
                            </Settings>
                        </div>
                    ) : (
                        <ButtonStyled>Đăng nhập</ButtonStyled>
                    )}
                </Row>
            </SignInCol>
        </RowStyled>
    )
}

export default Header
