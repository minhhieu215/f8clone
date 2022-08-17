import React from 'react'
import { Course } from '../../components/Course'
import MySlider from './Slider/MySlider'
const Home = () => {
    return (
        <div style={{ marginRight: '32px' }}>
            <MySlider />

            <div className="Khoahoc">
                <Course />
            </div>
            <div className="Lotrinhfrontend"></div>
            <div className="Baivietnoibat"></div>
            <div className="videonoibat"></div>
        </div>
    )
}

export default Home
