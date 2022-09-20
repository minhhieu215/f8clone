import styled from 'styled-components';

export const Container =styled.div`
--bgColor:#29303b;
height:50px;
width:100%;
display:flex;
align-items:center;
color:white;
position:fixed;
background:var(--bgColor);
.icon{
  width:60px;
  cursor:pointer;
  height:100%;
  display:grid;
  place-items:center;
}
.text{
  word-wrap: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-weight:550;
    font-size:1.4rem;
    margin-left: 16px;
    color:white;
}
.header_action{
  margin-left:auto;
}
.circular_icon{
  width: 34px;
  height: 34px;
  background: conic-gradient(${props=>props.theme.primaryColor} calc(3.6deg*48) , #4d4f50 0deg 360deg);
  border-radius: 50%;
  position: relative;
    z-index:2;
}

.circular_icon::after{
    content: "48%";
    font-size:1.2rem;
    display:grid;
    place-items:center ;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  background:var(--bgColor);
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 3;
}
.header_action{
  display:flex;
  align-items:center;
  color:white;
}
.header_progress_bar{
  display:flex;
  align-items:center;
}
.header_progress_text{
  font-size: 1.3rem;
    margin-left: 6px;
}
.header_action_btn{
  color:white;
  opacity:0.7;
  :hover{
    opacity:1;
  }
}
`