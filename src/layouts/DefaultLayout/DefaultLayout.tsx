import { Col, Row } from 'antd'
import React, { ReactNode } from 'react'
import Home from '../../pages/Home'
import { Footer } from './Footer'
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
                <Footer></Footer>
            </Row>
        </div>
    )
}

export default DefaultLayout
