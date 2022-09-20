import { EllipsisOutlined, SaveOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import { BlogOverviewContainer, ContentWrapper, HeaderWrapper, PaginationWrapper, PostItem, TagName } from './styled'
const BlogOverview = () => {
    return (
        <BlogOverviewContainer>
            <HeaderWrapper>
                <div>
                    <Avatar className="avatar">T</Avatar>
                    <span className="name">Thương Trịnh Hồ Diệu</span>
                </div>
                <span>
                    <SaveOutlined className="icon" />
                    <EllipsisOutlined className="icon" />
                </span>
            </HeaderWrapper>
            <ContentWrapper>
                <PostItem>
                    <h2>So sánh JavaScript với những đối thủ khác</h2>
                    <p>
                        Trong tương lai nếu bạn không nắm được JavaScript là gì thì khó mà tiến xa được trong lĩnh vực
                        công nghệ thông tin. Tin tốt...
                    </p>
                    <div className="tagWrapper">
                        <TagName to="/">Javascript</TagName>
                        <span>7 ngày trước</span>
                        <span>. 4 phút đọc</span>
                    </div>
                </PostItem>
                <img className="postImg" src={images.jsImg} alt="" />
            </ContentWrapper>
        </BlogOverviewContainer>
    )
}

export default BlogOverview
