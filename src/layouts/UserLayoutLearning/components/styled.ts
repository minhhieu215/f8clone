import styled from 'styled-components'
export const Container = styled.div`
background-color: #f7f8fa;
    border-bottom: 1px solid #dedfe0;
    padding: 8px 20px;
    position: sticky;
    top: 0;
    user-select: none;
    cursor:pointer;
    &:hover {
        background-color: #edeff1;
    }
    .title{
        color: var(--black-color);
        font-size: 1.6rem;
        font-weight: 600;
        margin: 0;
    }
    .icon{
        position:absolute;
        /* top:50%;
        /* transform:translateY(50%); */
        right:23px; 
    }
    .desc { 
        color: #29303b;
        font-size: 1.2rem;
        font-weight: 400;
        margin-top: 4px;
    }
    `

export const HideContainer = styled.div`
    padding: 10px 0 10px 2px;
    display:flex;
    &:hover { 
            cursor:pointer;
            background-color:#f7f8fa;
        }
    .info{
        margin: 0 0 0 28px;
        color:black;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    }
    .icon{
        display: flex;
        justify-content: center;
        margin-right: 12px;
        width: 36px;
        font-size:1.4rem;
        color:green;
    }
    .length{
        display:flex;
        align-items:center;
        gap:10px;
        font-size:1.2rem;
    
    }
    `