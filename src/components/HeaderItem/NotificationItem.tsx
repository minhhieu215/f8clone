import { Avatar } from 'antd'
import React from 'react'
import images from '../../assets/images'
import { NotiItemContainer } from './styled'

const NotificationItem = () => {
    return (
        <NotiItemContainer>
            <div className="avatar">
                <img src={images.logoImg} alt="" />
            </div>
            <div className="notiItemDetail">
                <p>
                    Chào mừng Minh Hiếu đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé
                    ❤️
                </p>
                <p>10 tháng trước</p>
            </div>
        </NotiItemContainer>
    )
}

export default NotificationItem
