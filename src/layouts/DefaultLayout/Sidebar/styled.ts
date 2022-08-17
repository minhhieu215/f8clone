import styled from 'styled-components'

export const RowStyled = styled.div
`
position:sticky;
top:80px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`

export const PlusStyled = styled.div`
height: 38px;
background: ${props=>props.theme.blue};
border-radius: 50%;
color: white;
aspect-ratio: 1/1;
display:flex;
align-items:center;
justify-content:center;
font-size: 2.2rem;
cursor:pointer;

}
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
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:14px;
    background-color: #e8ebed;
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