import { Button } from 'antd';
import styled from 'styled-components';
import images from '../../assets/images';
import Course from '../../components/Course';
export const Container = styled.div`
margin-top:${props=>props.theme.heightHeader};
margin-bottom:150px;
&>div{
    padding-inline:32px;
}

`
export const CouresPageContainer = styled.div`
    padding-right:44px;
    padding-left:44px;
    margin-top:24px;
    margin-inline: -12px;
    display:flex;
& > div {
    margin-bottom:30px;
}

.courseDetail{
    width: 66.66667%;
    padding-inline:12px;
}
.courseView { 
    width: 33.33333%;
    padding-inline:12px;
    .item{
        margin-bottom: 60px;
    margin-left: 24px;
    padding-bottom: 20px;
    display:flex;
    align-items:center;
    flex-direction:column ;
    justify-content:  center;
        .coursePreview{
            border-radius: 16px;
            cursor:pointer;
            margin: 2px 0 20px;
            overflow: hidden;
            position: relative;
            user-select: none;
            width: 100%;
            background: url(${images.bgHtmlCssPro});
            padding-top: 56.25%;  
            background-position: center;
            background-size: cover;
              p { 
                bottom: 0;
                color: #fff;
                font-size: 1.6rem;
                font-weight: 550;
                left: 0;
                position: absolute;
                right: 0;
                text-align: center;
                width: 100%;
                z-index: 1;
                            
                        }
                 svg{
                            fill:white;
                        left: 50%;
                        position: absolute;
                        top: 50%;
                        transform: translate(-50%,-50%);
                        }
         }
         h5{
             color:${props=>props.theme.primaryColor};
            font-size: 32px;
            font-weight: 400;
            width:fit-content;
            margin: 0 auto;
            opacity: .8;
         }
         ul{
            padding: 24px 0 10px 4px;
            font-size:1.4rem;
            line-height: 1.6;
            color: #494949;
            li { 
                margin-bottom: 10px;
                padding-left: 35px;
                position:relative;
                svg { 
                    position :absolute;
                    left:0;
                    top:50%;
                    transform : translateY(-50%)
                }
            }
         }
    }
}

`

export const TitleStyled = styled.div<{size?:string}>`
    font-size:${props=>props.size||"2rem"};
font-weight:700;

`
export const Text = styled.p`
    font-size:1.4rem;
`
export const CourseDetailList = styled.ul`  
display:grid;
grid-template-columns:repeat(2,1fr);

    li { 
        list-style:none;
        font-size:1.4rem;
        line-height:1.6;
        margin-bottom :12px;
        padding-inline: 24px;
        color:#333;
        position:relative;

        .icon { 
            color:${props=>props.theme.primaryColor};
            position:absolute;
            left: 0;
            top:2px;
        }
    }
`
export const CourseHeadWrapper = styled.div`
        display:flex;
        justify-content:space-between;
    ul {
        display:flex;
        gap:20px;
        li { 
            list-style:none;
            font-size:1.4rem;
        }
    }
`
export const ButtonStyled = styled(Button)`
color:${props=>props.theme.primaryColor};
font-weight:550;
user-select:none;
&:hover {
    color:${props=>props.theme.primaryColor};
   opacity:0.8;
}
`
export const CourseContent  =styled.div`
width:100%;
`
export const SignUpBtn = styled(Button)`
font-size: 1.6rem;
    margin-top: 16px;
    min-width: 180px;
    padding: 18px 16px;
    border-radius : 20px;
    background-color: ${props=>props.theme.primaryColor};
    display:flex;
    align-items:center;
    justify-content:  center;
    color:white;
    font-weight:550;
    &:hover { 
    color:white;
        background-color: ${props=>props.theme.primaryColor};
        opacity:.8;
    }
`

//Page user
export const CoursePageUserContainer = styled.div`
width: 100%;
height:100%;
overflow-y:scroll;
.video{
    padding-inline: 8.5%;
    background:black;
}
.heartIcon { 
    color: #d43c68;
    height:1rem;
}
.poweredWrapper{
    color: #666;
    font-size: 1.4rem;
    padding: 12px 0;
    text-align: center;
}
`
export const VideoContent = styled.div`
    padding: 0 8.5%;
    min-height: 400px;
    .video_content_top{
        display:flex;
        justify-content:space-between;
        align-items: center;
    }
    .title{
        font-size: 2.8rem;
         margin: 48px 0 8px;
    }
    .update{
        font-size: 1.3rem;
    margin-bottom: 36px;
    }
    .takeNoteBtn{
        font-size: 1.4rem;
    padding: 12px 16px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #ebebeb;
    border:solid 1px   #ebebeb;
    :hover{
    border:solid 1px   #ebebeb;
        color: black;
        
    }
    }
 .video_content_bottom{
    margin:16px 0;
 }   
`