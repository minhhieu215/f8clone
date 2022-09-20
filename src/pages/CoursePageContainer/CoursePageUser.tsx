import { Button } from 'antd'
import React from 'react'
import { CoursePageUserContainer, VideoContent } from './styled'

const CoursePageUser = () => {
    return (
        <CoursePageUserContainer>
            <div className="video">
                <iframe
                    width="872"
                    height="491"
                    src="https://www.youtube.com/embed/59IKR_YVeps"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <VideoContent>
                <div className="video_content_top">
                    <div className="headerWrapper">
                        <h1 className="title">Header notification CSS - Phần 1</h1>
                        <p className="update">Cập nhật tháng 5 năm 2022</p>
                    </div>
                    <Button className="takeNoteBtn">
                        Thêm ghi chú tại <strong> 00:00</strong>
                    </Button>
                </div>
                <div className="video_content_bottom">
                    <p>
                        👉 Xem trang web mẫu tại đây:{' '}
                        <a href="https://f8ubuntu.online/" target="_blank" rel="noreferrer">
                            https://f8ubuntu.online/
                        </a>{' '}
                        🎉🎉
                    </p>
                </div>
            </VideoContent>
            <p className="poweredWrapper">
                Made with{' '}
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart"
                    role="img"
                    className="heartIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                    ></path>
                </svg>
                · Powered by F8
            </p>
        </CoursePageUserContainer>
    )
}

export default CoursePageUser
