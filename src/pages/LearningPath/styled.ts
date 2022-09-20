import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.div`
   margin-bottom: 60px;
    padding: 8px 44px 0;`
    export const TitleStyled = styled.div<{size?:string}>`
    font-size:${props=>props.size||"2rem"};
font-weight:700;
margin:16px 0 ;

`
export const Text = styled.p`
    font-size:1.5rem;
    margin:15px 0;

`
export const LearningList = styled.div`
        display: grid;
        grid-auto-flow:column ;
        grid-auto-columns:minmax(300px,500px);
        margin-top: 24px;
        column-gap :24px;
`
export const LearningItem = styled.div`
    border: 2px solid #e8e8e8;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    font-size:1.4rem ;
    .learningItemBody{
        display: flex;
        margin-bottom: 20px;
    }
    .learningPathImgContainer{
        align-items: center;
        display: flex;
        padding-left: 24px;
   
         }
         .learningPathImg{
            border-radius: 50%;
                height: 98px;
                object-fit: cover;
                width: 98px;
                border:solid 5px ${props=>props.theme.primaryColor};
         }
`
export const LinkTextStyled = styled(Link)`
    color: #242424;
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 14px;
`
export const LinkImgStyled = styled(Link)`
    align-items: center;
    border: 5px solid var(--primary-color);
    border-radius: 50%;
    display: flex;
    height: 122px;
    justify-content: center;
    overflow: hidden;
    width: 122px;
`
 export const ButtonStyled = styled(Button)`
    border-radius:15px;
    color:white;
    font-weight:550;
    border:none;
    width:fit-content;
    background : ${props => props.theme.primaryColor};
    &:hover {
        cursor:pointer;
        color:white;
        background : ${props => props.theme.primaryColor};
        opacity:0.8;
    }
`

export const SuggestWrapper = styled.div`
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        overflow: hidden;
        .suggestInfo{
            width:400px;
            flex-shrink:0;
          }
          .suggestImg{
            width: 420px;
          }
.suggestBox{
    border: 2px solid #292929;
    border-radius: 999px;
    color: #292929;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 8px;
    padding: 10px 16px;
    text-align: center;
    transition: .2s ease;
    :hover {
        background-color: #292929;
    color: #fff;
    }
}

`