import styled from 'styled-components'

export const RowStyled = styled.div
`
position:sticky;
top:80px;
width:96px;
padding-inline:8px;
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:10px;
margin-top:8px;

`

export const PlusStyled = styled.div<{isWrite:boolean}>`
height: 44px;
background: ${props=>props.theme.blue};
border-radius: 50%;
color: white;
aspect-ratio: 1/1;
display:flex;
align-items:center;
justify-content:center;
font-size: 2.2rem;
cursor:pointer;
transform: ${props=>props.isWrite?"rotate(45deg)":"rotate(0deg)"};
transition:transform .25s linear;
&:hover > span{
    transform:scale(1.4);
    transition : transform 0.3s ease ;
    cursor:pointer;
}
`
export const SidebarContainer = styled.div`
    height: 60px;
    border-radius:16px;
    aspect-ratio:1/1;
    display:flex;
    color:black;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:14px;
    cursor:pointer;
    p{
        margin:0;
        font-size: 1.2rem;
    font-weight: 500;
    }
    &:hover{
        background : #f5f5f5;
    }
    &:hover .icon {
        color:black;
    }
`
export const LinkStyled = styled.div`
    .active ${SidebarContainer} {
            background-color: #e8ebed;
    }
    

`

export const WriteBlogContainer = styled.div`
    min-width: 200px;
    color: #444;
    font-size: 1.4rem;
    padding: 12px 20px;
    span{
        margin-left:16px;
    }
    &:hover{
        background-color:#f0f0f0;
        cursor:pointer;
    }
    `