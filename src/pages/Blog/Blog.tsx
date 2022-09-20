import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import BlogOverview from './BlogOverview'
import {
    BlogContainer,
    ButtonStyled,
    ColStyled,
    PaginationWrapper,
    TagName,
    Text,
    TitleStyled,
    TopicContainer,
    TopicWrapper
} from './styled'
const Blog = () => {
    return (
        <BlogContainer>
            <div>
                <TitleStyled size="2.8rem">Bài viết nổi bật</TitleStyled>
                <Text>
                    Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
                </Text>
            </div>
            <Row>
                <ColStyled span={16}>
                    <div style={{ padding: '0 64px 44px 0' }}>
                        <BlogOverview />
                        <BlogOverview />
                        <PaginationWrapper>
                            <div className="pagination-pages">
                                <ButtonStyled to="/">
                                    <ArrowLeftOutlined className="paginator disabled" />
                                </ButtonStyled>
                                <ButtonStyled to="1">1</ButtonStyled>
                                <ButtonStyled to="2">2</ButtonStyled>
                                <ButtonStyled to="3">3</ButtonStyled>
                                <ButtonStyled to="4">4</ButtonStyled>
                                <ButtonStyled to="5">5</ButtonStyled>
                                <ButtonStyled to="6">6</ButtonStyled>
                                <ButtonStyled to="7">7</ButtonStyled>
                                <ButtonStyled to="8">8</ButtonStyled>
                                <ButtonStyled to="9">9</ButtonStyled>
                                <ButtonStyled to="/">
                                    <ArrowRightOutlined className="paginator" />
                                </ButtonStyled>
                            </div>
                        </PaginationWrapper>
                    </div>
                </ColStyled>
                <ColStyled span={8}>
                    <TopicWrapper>
                        <h2>Các chủ đề được đề xuất</h2>
                        <TopicContainer>
                            <TagName big to="/">
                                Front-end / Mobile Apps
                            </TagName>
                            <TagName big to="/">
                                Back-end / Devops
                            </TagName>
                            <TagName big to="/">
                                UI / UX / Design
                            </TagName>
                            <TagName big to="/">
                                Others
                            </TagName>
                        </TopicContainer>
                    </TopicWrapper>
                </ColStyled>
            </Row>
        </BlogContainer>
    )
}

export default Blog
