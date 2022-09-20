import { ArrowRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'
import { Container } from './styled'
const Footer = () => {
    return (
        <Container>
            <div className="action">
                <Button icon={<LeftOutlined />} className="actionBtn prev" type="text">
                    Previous lesson
                </Button>
                <Tooltip title="Phím tắt: crtl + enter">
                    <Button className="actionBtn next" type="text">
                        Next lesson <RightOutlined />
                    </Button>
                </Tooltip>
            </div>
            <div className="toggleWrap">
                <h3>12. Xây dựng web Shopee</h3>
                <div className="wrapBtn">
                    <ArrowRightOutlined />
                </div>
            </div>
        </Container>
    )
}

export default Footer
