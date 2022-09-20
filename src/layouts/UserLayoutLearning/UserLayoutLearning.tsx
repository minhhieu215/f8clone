import { Col, Row } from 'antd'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
interface IProps {
    children: ReactNode
}
const ColStyled = styled.div`
    position: fixed;
    margin-top: 50px;
    top: 0;
    width: 77%;
    bottom: 50px;
`

const UserLayoutLearning: React.FC<IProps> = ({ children }) => {
    return (
        <>
            <Row>
                <Header />
            </Row>
            <ColStyled>{children}</ColStyled>
            <Sidebar />
            <Footer />
        </>
    )
}

export default UserLayoutLearning
