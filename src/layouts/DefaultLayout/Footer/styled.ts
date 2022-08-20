import styled from 'styled-components';
export const FooterBlock = styled.div`
width:100%;
background-color: #181821;
color: #a9b3bb;
overflow: hidden;
padding: 68px 0 40px;
`
export const FooterContainer = styled.div`
padding-inline:100px;
display:flex;
align-items:flex-start;
justify-content:space-between;
width:100%;
font-size:1.2rem;
.text{
    color:white;
    font-size:1.6rem;
    margin-bottom:20px;
}
.item{
    width:25%;
    flex-shrink:0;
    text-align:left;
}
.item +.item{
    margin-left:30px;
}
`