import { ArrowLeftOutlined, FileTextOutlined, QuestionCircleFilled } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../../assets/images'
import { Image } from '../../../components/Image'
import { Container } from './styled'

const Header = () => {
    return (
        <Container>
            <div className="icon">
                <ArrowLeftOutlined />
            </div>
            <Link to="/">
                <Image img={images.logoImg} type="logo" size="mini" />
            </Link>
            <Typography.Text className="text">Học Lập Trình Để Đi Làm</Typography.Text>
            <div className="header_action">
                <div className="header_progress_bar">
                    <div className="circular_icon"></div>
                    <div className="header_progress_text">80/166 bài học</div>
                </div>
                <Button type="text" className="note header_action_btn">
                    <FileTextOutlined />
                    Ghi chú
                </Button>
                <Button type="text" className="introduct header_action_btn">
                    <QuestionCircleFilled />
                    Hướng dẫn
                </Button>
            </div>
        </Container>
    )
}

export default Header
