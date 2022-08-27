import { SearchOutlined } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../../assets/images'
import { Image } from '../../../components/Image'
import { ButtonStyled, InputStyled, RowStyled, SignInCol } from './styled'
const Header = () => {
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
                    <ButtonStyled>Đăng nhập</ButtonStyled>
                </Row>
            </SignInCol>
        </RowStyled>
    )
}

export default Header
