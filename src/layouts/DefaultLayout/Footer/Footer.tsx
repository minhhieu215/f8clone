import { FacebookFilled, GithubFilled, YoutubeFilled } from '@ant-design/icons'
import { Typography } from 'antd'
import React from 'react'
import images from '../../../assets/images'
import { Image } from '../../../components/Image'
import { FooterBlock, FooterContainer } from './styled'
const Footer = () => {
    return (
        <FooterBlock>
            <FooterContainer>
                <div className="item">
                    <Image img={images.logoImg} type="logo" size="mini" />
                    <Typography.Text className="text" style={{ fontWeight: 550, width: '100px' }}>
                        Học Lập Trình Để Đi Làm
                    </Typography.Text>
                    <p>Điện thoại: 0246.329.1102 </p>
                    <p>Email: contact@fullstack.edu.vn</p>
                    <p>Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy, Hà Nội</p>
                </div>
                <div className="item">
                    <Typography.Text className="text" style={{ fontWeight: 550, width: '100px' }}>
                        Về F8
                    </Typography.Text>
                    <p>Giới thiệu</p>
                    <p>Cơ hội việc làm</p>
                </div>
                <div className="item">
                    <Typography.Text className="text" style={{ fontWeight: 550, width: '100px' }}>
                        Hỗ trợ
                    </Typography.Text>
                    <p>Liên hệ</p>
                    <p>Bảo mật</p>
                    <p>Điều khoản</p>
                </div>
                <div className="item">
                    <Typography.Text className="text" style={{ fontWeight: 550, width: '100px' }}>
                        CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8
                    </Typography.Text>
                    <p>Mã số thuế: 0109922901</p>
                    <p>Ngày thành lập: 04/03/2022</p>
                    <p>
                        Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mang lại giá
                        trị cho cộng đồng
                    </p>
                </div>
            </FooterContainer>
            <FooterContainer>
                <p>© 2018 - 2022 F8. Nền tảng học lập trình hàng đầu Việt Nam</p>
            </FooterContainer>
        </FooterBlock>
    )
}

export default Footer
