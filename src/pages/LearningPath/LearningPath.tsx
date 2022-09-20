import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images'
import {
    ButtonStyled,
    Container,
    LearningItem,
    LearningList,
    LinkImgStyled,
    LinkTextStyled,
    SuggestWrapper,
    Text,
    TitleStyled
} from './styled'

const LearningPath = () => {
    return (
        <Container>
            <div style={{ marginBottom: '80px' }}>
                <TitleStyled size="3.2rem">Lộ trình học</TitleStyled>
                <Text>
                    Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí
                    “Lập trình viên Front-end” bạn nên tập trung vào lộ trình “Front-end”.
                </Text>
            </div>
            <LearningList>
                <LearningItem>
                    <div className="learningItemBody">
                        <div>
                            <LinkTextStyled to="/">Lộ trình học Front-end</LinkTextStyled>
                            <p>
                                Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ
                                chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
                            </p>
                        </div>
                        <div className="learningPathImgContainer">
                            <LinkImgStyled to="/">
                                <img className="learningPathImg" src={images.lnPathImg1} alt="" />
                            </LinkImgStyled>
                        </div>
                    </div>
                    <ButtonStyled>Xem chi tiết</ButtonStyled>
                </LearningItem>
                <LearningItem>
                    <div className="learningItemBody">
                        <div>
                            <LinkTextStyled to="/">Lộ trình học Back-end</LinkTextStyled>
                            <p>
                                Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc
                                thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                            </p>
                        </div>
                        <div className="learningPathImgContainer">
                            <LinkImgStyled to="/">
                                <img className="learningPathImg" src={images.lnPathImg2} alt="" />
                            </LinkImgStyled>
                        </div>
                    </div>
                    <ButtonStyled>Xem chi tiết</ButtonStyled>
                </LearningItem>
            </LearningList>

            <SuggestWrapper>
                <div className="suggestInfo">
                    <TitleStyled size="2.4rem">Tham gia cộng đồng học viên F8 trên Facebook</TitleStyled>
                    <Text>
                        Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ
                        nhau trong quá trình học nhé.
                    </Text>
                    <a
                        className="suggestBox"
                        target="_blank"
                        href="https://www.facebook.com/groups/f8official"
                        rel="noreferrer"
                    >
                        Tham gia nhóm
                    </a>
                </div>
                <div className="suggestImgContainer">
                    <img className="suggestImg" src={images.suggestImg} alt="" />
                </div>
            </SuggestWrapper>
        </Container>
    )
}

export default LearningPath
