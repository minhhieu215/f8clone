import { Button } from 'antd';
import styled, { keyframes } from 'styled-components';
import images from '../../assets/images';
export const CourseContainer = styled.div`
width:250px;
.price { 
    font-weight:bold;
    color : ${props=>props.theme.primaryColor}
}
.numberMember{
    font-size : 12px;
}
h1{
    margin: 10px 0px;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: #292929;
    overflow: hidden;
    display: -webkit-box;
}
`
export const CourseImg = styled.div`
background: url(${images.bgHtmlCssPro});
background-color: rgba(0,0,0,.1);
background-position: 50%;
background-repeat: no-repeat;
background-size: cover;
height: 120px;
aspect-ratio: 2/1;
border-radius: 15px;
position:relative;
cursor:pointer;
    .overlay{
            position:absolute;
            transition:background 1s linear;
            background:rgba(0,0,0,0.5);
            z-index:1000;
            height:100%;
            width:100%;
            border-radius:15px;
            align-items:center;
            justify-content:center;
        display:none;

}
&:hover .overlay {
    display:flex;
}
`
const floatUp = keyframes`
       from { 
        opacity:0;
        transform: translateY(50%)
       }to{
        opacity:1;
        transform: translateY(0)
       }     
`;

export const ButtonCourse = styled(Button)`
    animation: ${floatUp} .2s linear ;
    border-radius:20px;
    color:black;
    font-weight:550;
    font-size:1.2rem;
     &:hover { 
        border-color:none;
        color:black;
     }
`
export const UserPost = styled.p`
display:flex;
justify-content:flex-start;
gap:10px;
align-items:center;
font-size:1.5rem;
.userName{
    font-weight:550;
}
.timeToRead{
    color:gray;
}
`
export const CourseDetailItemContainerStyled = styled.div<{isActive:boolean, onClick:any}>`
  background: #f5f5f5;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    cursor:pointer;
    user-select:none;
    .content {
        padding: 14px 30px 14px 48px;
        font-size: 1.6rem;
        position:relative;
    }
    .content:before{
            content:${props=> props.isActive ?'"-"': '"+"'};
            font-size: 26px;
    font-weight: 300;
    left: 20px;
    position: absolute;
    top: 48%;
    color:${props=>props.theme.primaryColor};
   transform: translateY(-50%); 
    }
    .floatRight{
        float:right;
    }
  
`
export const CourseDetailItemHide = styled.div`
padding: 0 16px 0 48px;
min-height: 48px;
font-size:1.4rem;
align-items: center;
    display: flex;   
     justify-content: space-between;
     border-bottom: solid 1px rgba(0,0,0,.03) ;
.floatRight{
        float:right;
    }
  .floatleft{
      display: flex;   
    align-items: center;
    gap:12px;
  }
`
