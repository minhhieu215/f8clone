import styled from 'styled-components';

export const Container = styled.div`
    top: 0;
    margin-top: 50px;
    bottom:50px;
    position: fixed;
    width:23%;
    right:0;
    display:block ;
    border-left: 1px solid #e7e7e7;
    .sidebar_header{
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 12px 16px;
        user-select: none;
    }
    .sidebar_body{
        height:100%;
        overflow-y:overlay;
    }
`