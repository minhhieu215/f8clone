import React from 'react'
import { ButtonStyled, SlideItemContainer, SlideShow } from './styled'
interface IProps {
    title: string
    introduce: string
    img: string
    buttonText: string
    bgColor: string
}
const SliderItem: React.FC<IProps> = ({ title, introduce, buttonText, img, bgColor }) => {
    return (
        <SlideItemContainer style={{ background: bgColor }}>
            <SlideShow>
                <h1>{title}</h1>
                <p>{introduce}</p>
                <ButtonStyled>{buttonText}</ButtonStyled>
            </SlideShow>
            <img className="slide_img" src={img} alt="img failed" />
        </SlideItemContainer>
    )
}

export default SliderItem
