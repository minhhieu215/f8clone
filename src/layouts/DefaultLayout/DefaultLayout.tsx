import { Col, Row } from 'antd'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Home from '../../pages/Home'
import { Footer } from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import { Content } from './styled'
interface IProps {
    children: ReactNode
}
const ColStyled = styled.div`
    padding: 0 40px 0 20px;
    width: calc(100% - 96px);
`
const DefaultLayout: React.FC<IProps> = ({ children }) => {
    return (
        <div>
            <Row>
                <Header></Header>
            </Row>
            <Content>
                {/* Div dung de giu sticky position */}
                <div>
                    <Sidebar></Sidebar>
                </div>
                <ColStyled>
                    {/* Page */}
                    {children}
                </ColStyled>
            </Content>
            <Row>
                <Footer></Footer>
            </Row>
        </div>
    )
}

export default DefaultLayout
