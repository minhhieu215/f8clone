import React from 'react'
import { CourseBlock } from '../../components/CourseBlock'
import MySlider from './Slider/MySlider'
const Home = () => {
    return (
        <div style={{ marginRight: '32px', marginBottom: '150px' }}>
            <MySlider />
            <CourseBlock />
        </div>
    )
}

export default Home
