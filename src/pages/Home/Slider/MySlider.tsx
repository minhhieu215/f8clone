import React from 'react'
import Slider from 'react-slick'
import { sliderConfig } from '../../../config'
import { SliderContainer } from '../styled'
import SliderItem from './SliderItem'
import { CustomSlider } from './styled'
const MySlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <SliderContainer>
            <CustomSlider {...settings}>
                {sliderConfig.map((slide, index) => (
                    <SliderItem
                        key={index}
                        title={slide.title}
                        introduce={slide.introduce}
                        buttonText={slide.buttonText}
                        img={slide.img}
                        bgColor={slide.bgColor}
                    />
                ))}
            </CustomSlider>
        </SliderContainer>
    )
}

export default MySlider
