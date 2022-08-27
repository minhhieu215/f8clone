import React, { ReactNode, useEffect, useState } from 'react'
import images from '../../assets/images'
import { AppContext } from '../../context/AppContext'
import { CourseDetailItemContainerStyled, CourseDetailItemHide } from './styled'
interface ICourse {
    isActive: boolean
    children: ReactNode
    onClick: Function
}

const CourseDetailItem = () => {
    const { numberActive, setNumberActive } = React.useContext(AppContext)

    const [isActive, setActive] = useState(false)
    useEffect(() => {
        if (numberActive == 2) {
            setActive(true)
        } else if (numberActive == 0) {
            setActive(false)
        }
    }, [numberActive])
    const handleClick = () => {
        if (!isActive) {
            setActive(true)
            setNumberActive(numberActive + 1)
        } else {
            setActive(false)
            setNumberActive(numberActive - 1)
        }
    }
    return (
        <div>
            <CourseDetailItemContainerStyled onClick={handleClick} isActive={isActive}>
                <div className="content">
                    <strong> 1.Bắt đầu </strong>
                    <span className="floatRight">4 bài học</span>
                </div>
            </CourseDetailItemContainerStyled>
            {isActive && (
                <>
                    <CourseDetailItemHide>
                        <div className="floatleft">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.125 7.375C11.3438 7.5 11.5 7.75 11.5 8C11.5 8.28125 11.3438 8.53125 11.125 8.65625L6.625 11.4062C6.40625 11.5312 6.09375 11.5625 5.875 11.4062C5.625 11.2812 5.5 11.0312 5.5 10.75V5.25C5.5 5 5.625 4.75 5.875 4.625C6.09375 4.46875 6.40625 4.46875 6.625 4.625L11.125 7.375ZM6.5 5.71875V10.3125L10.25 8L6.5 5.71875ZM0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8ZM8 15C11.8438 15 15 11.875 15 8C15 4.15625 11.8438 1 8 1C4.125 1 1 4.15625 1 8C1 11.875 4.125 15 8 15Z"
                                    fill="#808B9A"
                                />
                            </svg>

                            <span>1. Bạn sẽ làm được gì sau khóa học? </span>
                        </div>
                        <span className="floatRight">03:15</span>
                    </CourseDetailItemHide>
                </>
            )}
        </div>
    )
}

export default React.memo(CourseDetailItem)
