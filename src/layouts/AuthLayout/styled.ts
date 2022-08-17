import styled from 'styled-components'
import images from '../../assets/images'
import { Typography , Button } from 'antd'
export const Background = styled.div`
    height:100vh;
    width:100vw;
    background-image: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(${images.bgImg});
    display:flex;
    align-items:center;
    justify-content:center;
}
`
export const Container = styled.div`
    width:640px;
    max-width:calc(100vw - 32px);
    min-height: 60vh;
    max-height: 100vh;
    background:white;
    padding: 48px 16px;
    display:flex;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const Title = styled(Typography.Title)`
color: #292929;
font-size: 30px !important;
font-weight: 700;
line-height: 1.4;
user-select:none;
margin-top:14px;
text-align:center;

}
`

export const ButtonGroup = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:44px;
`
export const ButtonStyled = styled(Button)`
--height: 44px;
    background-color: #fff;
    border: 2px solid #dce0e3;
    border-radius: 44px;
    height: var(--height);
    line-height: var(--height);
    padding-left: 16px;
    text-align: center;
    width: 320px;
    display:flex;
    align-items:center;
    & + & {
        margin-top:14px;
    }
    .text{
        flex-grow: 1;
        font-size: 14px;
        font-weight: 550;
        color: darkslategray;
    }
    .icon { 
        font-size :20px;

    }
    &:hover { 
        background-color: #dce0e3;
    cursor: pointer;
    }
    `
export const ContentStyled = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:60%;
`
export const NotAccount = styled.div`
margin: 38px 16px;
text-align:center;
.btn_sign_up{
     color: #f25f23;
     padding-left:5px;
     font-weight: 550 
}
.btn_sign_up:hover { 
    color: #f25f23;
}
`
export const Footer =  styled.div`
width:60%;
text-align:center;
font-size:10px;
`