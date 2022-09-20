import styled from 'styled-components';
export const Container = styled.div`
    height:50px  ;
    width: 100%;
    position:fixed;
    bottom:0 ;
    left:0;
    background-color: #f0f0f0;
    display:grid;
    place-items:center;
    .actionBtn{
        font-size:1.6rem;
        font-weight:500;

        :hover{
            opacity:0.8;
            background:transparent;
        }
    }
    .actionBtn.next{
        border:2px solid ${props=>props.theme.primaryColor};
        color: ${props=>props.theme.primaryColor};
        text-align:center ;
     
    }
    .toggleWrap{
        position:absolute;
        right:0;
        top:0;
        display:flex;
        align-items:center;
        h3{
            font-size: 1.4rem;
            margin:14px 0;
        }
    }
    .wrapBtn{
        font-size: 1.6rem;
            height: 38px;
            display:grid;
    place-items:center;
    margin: 0 8px;
    width: 38px;
    background-color: #fff;
    border-radius:50%;
    }
`