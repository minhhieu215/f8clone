import { Button, Typography } from 'antd';
import styled from 'styled-components';
export const SliderContainer = styled.div`
height:fit-content;
margin-bottom:100px;
`
export const CourseContainer = styled.div`
display:flex;
gap:5px;
flex-wrap:wrap;
`
export const HeadingWrap = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:10px;
& ~ & {
    margin-top:30px;
}
`
export const Title = styled(Typography.Text)`
font-size:2.6rem;
font-weight:700;
margin-bottom:10px;
`
export const ButtonStyled = styled(Button)`
 span { 
    color:${props=>props.theme.primaryColor};
    font-weight:500;
 }
 &:hover span {
    text-decoration : underline;
 }
 &:hover .icon {
    transform:translateX(30%);
    transition : transform .2s linear ;
 }
`