import { Button } from 'antd';
import Slider from 'react-slick';
import styled from 'styled-components';
export const SlideItemContainer = styled.div`
width:100%;
display:flex;
padding:20px 32px;
border-radius:15px;
align-items:center;
.slide_img { 
    object-fit:cover;
    flex-grow : 1 ;
}
`
export const SlideShow = styled.div`
width: 640px;
max-width:100%;
color:white;
flex-shrink:0;
padding:0 16px;
 > h1{
    font-weight:bold;
    font-size: 2.6rem;
    color:white;
}
 > p{

}

`
export const ButtonStyled = styled(Button)`
    border: solid 2px white;
    color:white;
    font-size: 1.6rem;
    background: transparent;
    height:36px;
    aspect-ratio:1/1;
    border-radius:16px;
    text-align:center;

    &:hover{
        border-color:white;
    }
`

export const CustomSlider = styled(Slider)`
    .slick-dots{ 
        text-align:left;
    }
    .slick-dots li button:before{
        background-color: #dce0e3;
        border-radius: 4px;
        content: "";
        height: 10px;
        opacity: 1;
        transition: width .3s linear,background-color .3s linear;
        width: 32px;
    }
    .slick-dots li {
        width:32px;
        margin-right:10px;
    }
    .slick-dots li.slick-active{
        margin-right:10px;
        width: 50px;
    }
    .slick-dots li.slick-active button:before {
        background-color: #9aa6af;
        width: 50px;
    }
    .slick-dots li.slick-active button{
        width:50px
    }
    .slick-prev {
        left: -0;
        z-index: 100;
    }
    .slick-next { 
        right: 8px;
        z-index:100;
    }
    .slick-prev:before ,.slick-next:before { 
        font-size:30px;
    }
`