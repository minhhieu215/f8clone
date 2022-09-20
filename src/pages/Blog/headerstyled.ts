import { Button, Col, Input, Row } from 'antd'
import styled from 'styled-components'
export const RowStyled = styled(Row)`

width:100%;
height:66px;
padding: 0 32px;
display:flex;
align-items:center;
.text { 
    margin-left:10px;
}
position:fixed;
top:0;
z-index:1000;
border-bottom: 1px solid lightgray;
background-color:white;
`
export const InputStyled = styled(Input)`
    border-radius:18px;
    width:100%;
    border:2px solid #d9d9d9;
    padding:5px 15px;
    &:focus{
        border-color:black;
        box-shadow:none;
    }
    .icon {
        font-size:20px;
    }
`
export const ButtonStyled = styled(Button)`
border-radius:15px;
color:white;
font-weight:550;
border:none;
background : ${props => props.theme.primaryColor
};
&:hover {
    cursor:pointer;
    color:white;
    background : ${props => props.theme.primaryColor};
    opacity:0.8;
}`
export const SignInCol = styled(Col)`
    justify-content:flex-end;
    .myCourseBtn{
        background-color: transparent;
    color: #333;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 600;
    margin-right: 16px;
    padding: 8px;
    }
    .icon {
        padding: 8px;
        cursor:pointer;
        color:gray;
        :hover { 
            color:black;
        }
    }
    .userBlock {
        display:flex;
        
    }
    .userBlock > div {
        position:relative;
    }
`
export const PublishButton = styled(Button)`
    color:white;
    background:${props => props.theme.primaryColor};
    border-radius:20px;
    font-weight:500;
    border:none;
    margin-right:10px;
    :hover{
        color:white;
    background:${props => props.theme.primaryColor};
    border:none;

    }
`