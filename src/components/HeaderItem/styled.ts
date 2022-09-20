import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
    0%{
        opacity:0 ;
        transform:translateY(-5px)
    }
    100%{
        opacity:1;
        transform:translateY(0)
    }
`
export const Container = styled.div<{show?:boolean}>`
background:white;
border-radius: 10px;
min-width: 400px;
position:absolute;
right:0;
top:32px;
box-shadow: 0 -4px 32px rgba(0,0,0,.2);
animation:${fadeIn} .25s linear ;
display:${props => props.show ? 'block':'none'};

.headerWrapper{
    display:flex;
    justify-content:space-between;
    padding: 16px 20px;
    align-items:center;
}
`
export const NotiItemContainer = styled.div`
display:flex;
align-items:center;
margin: 0 8px;
    padding: 8px 36px 8px 12px;
.avatar{
    border-radius: 50%;
    flex-shrink: 0;
    height: 48px;
    overflow: hidden;
    width: 48px;
    img{
        height:100%;
        width:100%;
    }
}
.notiItemDetail{
    font-size: 1.4rem;
    line-height: 18px;
    padding: 0 10px 0 16px;
    word-break: break-word;
}
`
// MyCourse
export const MyCourseItemContainer = styled.div`
display:flex;
margin: 0 8px;
    padding: 8px 36px 8px 12px;
    h3 {
    font-size: 1.4rem;
    margin: 6px 0 0;
    font-weight:550;
    }
    a{
        white-space: nowrap;
        color:black;
        display:block;
        width:100%;
    }
    p{
        color: #666;
    font-size: 1.2rem;
    margin: 4px 0 0;
    }
    .thumbnail{
        border-radius: 8px;
        display: block;
        line-height: 67px;
        min-height: 67px;
        text-align: center;
        width: 120px;
    }
    
    .course_detail{
        flex: 1 1 ;
        margin-left: 12px;
    }
    .progressBar{
        background-color: #ddd;
    border-radius: 4px;
    height: 8px;
    margin-top: 8px;
    width:100%;
    position:relative;
    border-radius:10px;
    overflow:hidden;
    }
    .progressBar::after {
        content:"";
    position:absolute;
    left:0;
    top:0;
    height:100%;
    width:64%;
    background-color: ${props=>props.theme.primaryColor};
    }
    `