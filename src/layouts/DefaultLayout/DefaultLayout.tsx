import { Col, Row } from 'antd'
import React, { ReactNode } from 'react'
import Home from '../../pages/Home'
import Header from './Header'
import Sidebar from './Sidebar'
import { Content } from './styled'
interface IProps {
    children: ReactNode
}
const DefaultLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div>
            <Row>
                <Header></Header>
            </Row>
            <Content>
                <Col span={2}>
                    <Sidebar></Sidebar>
                </Col>
                <Col span={22}>
                    <Home></Home>
                </Col>
            </Content>
            <Row>
                <footer style={{ height: '1000px' }}>Footer</footer>
            </Row>
        </div>
    )
}

export default DefaultLayout
