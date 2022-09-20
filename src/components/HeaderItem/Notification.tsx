import { EllipsisOutlined } from '@ant-design/icons'
import React from 'react'
import NotificationItem from './NotificationItem'
import { Container } from './styled'
const Notification = ({ show }: { show: boolean }) => {
    return (
        <Container show={show}>
            <div className="headerWrapper">
                <h1>Thông báo</h1>
                <EllipsisOutlined />
            </div>
            <div>
                <NotificationItem />
            </div>
        </Container>
    )
}

export default Notification
