import React, { useState } from 'react'
import { Background, Container, Title, ButtonGroup, ButtonStyled, ContentStyled, NotAccount, Footer } from './styled'
import images from '../../assets/images'
import { Button, Typography } from 'antd'
import { Image } from '../../components/Image'
import { FacebookFilled, GithubFilled, GoogleOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
interface IProps {
    type: string
}
const AuthLayout: React.FC<IProps> = ({ type = 'singin' }) => {
    return (
        <Background>
            <Container>
                <ContentStyled>
                    <Image img={images.logoImg} type="logo" />
                    <Title>{type == 'signin' ? 'Chào mừng đến với F8' : 'Đăng kí tài khoản F8'}</Title>
                    <ButtonGroup>
                        <ButtonStyled>
                            <UserOutlined className="icon" />
                            <span className="text">Sử dụng email / số điện thoại</span>
                        </ButtonStyled>
                        <ButtonStyled>
                            <GoogleOutlined className="icon" />
                            <span className="text">Tiếp tục với Google</span>
                        </ButtonStyled>
                        <ButtonStyled>
                            <FacebookFilled className="icon" style={{ color: '#4267b2' }} />
                            <span className="text"> Tiếp tục với Facebook</span>
                        </ButtonStyled>
                        <ButtonStyled>
                            <GithubFilled className="icon" />
                            <span className="text">Tiếp tục với Github</span>
                        </ButtonStyled>
                    </ButtonGroup>
                    <NotAccount>
                        <Typography.Text style={{ userSelect: 'none' }}>
                            Bạn chưa {type == 'signin' ? 'chưa' : 'đã'} tài khoản?
                            <Link className="btn_sign_up" to={type == 'signin' ? '/signup' : '/signin'}>
                                {type == 'signin' ? 'Đăng kí' : 'Đăng nhập'}
                            </Link>
                        </Typography.Text>
                    </NotAccount>
                </ContentStyled>
                <Footer>
                    <Typography.Text style={{ userSelect: 'none' }}>
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với Điều khoản sử dụng của chúng
                        tôi.
                    </Typography.Text>
                </Footer>
            </Container>
        </Background>
    )
}

export default AuthLayout
