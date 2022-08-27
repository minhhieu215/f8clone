import { Row } from 'antd'
import styled from 'styled-components'
export const Content = styled(Row)`
    margin-top:${props=>props.theme.heightHeader};
    width:100%;
    display:flex;
    min-height:100vh;
`