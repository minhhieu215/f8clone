import { Button, Col } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const BlogContainer = styled.div`
     margin-bottom: 60px;
    padding: 8px 44px 0;
    & > div:first-child{
        margin-bottom:80px;
    }
 
    `
export const TitleStyled = styled.div<{size?:string}>`
    font-size:${props=>props.size||"2rem"};
font-weight:700;
margin:16px 0 ;

`
export const Text = styled.p`
    font-size:1.5rem;
    margin:15px 0;

`
export const ColStyled = styled(Col)`
padding-inline:12px;
`
//Blog Over view
export const BlogOverviewContainer  = styled.div`
    border: 2px solid #e8e8e8;
    border-radius: 16px;
    padding: 24px;
    &+& {
        margin-top: 16px;
    }
`
export const HeaderWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    .name{
        color: #292929;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 8px;
    }
    .avatar{
        text-align:center;
        background-color:orange;
    }
    .icon {
        color: #757575;
        cursor: pointer;
    padding: 4px 8px;
        margin:0
    }
`

export const ContentWrapper = styled.div`
display:flex;
align-items:center;

   .postImg {
    border-radius: 15px;
    object-fit: cover;
    width: 200px;
    }
`
export const PostItem = styled.div`
    flex: 1 1;
    padding-right: 32px;
     h2{ 
        color: #292929;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.6;
        margin-bottom: 0;
        margin-top: 8px;
     }
     p {
        color: #505050;
        font-size: 1.5rem;
        line-height: 1.6;
        margin-top: 4px;
     }
     .tagWrapper{
        padding-right: 32px;
     }

`
export const TagName = styled(Link)<{big?:boolean}>`
     background-color: #f2f2f2;
        border-radius: 100px;
        color: #333;
        font-weight: 500;
        line-height: 2rem;
        margin:  ${props=>props.big ?"0 8px 8px 0;":"0 4px 0 0"};
        padding: ${props=>props.big ?"6px 16px;":"4px 10px"};
        &:hover{
            color:#333
        }
        `

        export const TopicWrapper  = styled.div`
        padding-inline:12px;
            h2{
                color: #757575;
                font-size: 1.4rem;
                font-weight: 500;
                line-height: 1.8;
                text-transform: uppercase;
            }
        `
export const TopicContainer = styled.div`
    display:flex;
    margin:14px  0;
    flex-wrap:wrap;
`
export const PaginationWrapper = styled.div`
align-items: center;
    display: flex;
    font-size: 1.4rem;
    justify-content: center;
    margin-top: 20px;
;
.pagination-pages{
    padding: 0 10px;
    display:flex;
}

.paginator.disabled {
        color: #d0d7de;
    }
`
export const ButtonStyled = styled(NavLink)`
align-items: center;
    border: 1px solid #fff;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    font-weight: 500;
    margin-right: 4px;
    padding: 6px 12px;
    transition: all .2s;
    -webkit-user-select: none;
    -ms-user-select: none;
        color:black;
    user-select: none;
    
    &:hover{
        border: 1px solid #d0d7de;
        color:black;
    }
    `


