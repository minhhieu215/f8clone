import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { coursesConfig } from './config'
import { AuthLayout } from './layouts/AuthLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { UserLayoutLearning } from './layouts/UserLayoutLearning'
import { Blog, WriteBlog } from './pages/Blog'
import { CoursePageContainer, CoursePageGuest, CoursePageUser } from './pages/CoursePageContainer'
import Home from './pages/Home'
import { LearningPath } from './pages/LearningPath'
function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                }
            />
            <Route
                path="/courses"
                element={
                    <DefaultLayout>
                        <CoursePageContainer />
                    </DefaultLayout>
                }
            />
            <Route
                path="/learning-paths"
                element={
                    <DefaultLayout>
                        <LearningPath />
                    </DefaultLayout>
                }
            />
            {coursesConfig.map((course) => (
                <Route
                    path={`/courses/${course.link}`}
                    element={
                        // <DefaultLayout>
                        //     <CoursePageGuest
                        //         title={course.courseName}
                        //         introduce={course.introduce}
                        //         whatYouLearn={course.whatYouLearn}
                        //         chapterNumber={course.chapterNumber}
                        //         lessonNumber={course.lessonNumber}
                        //         length={course.length}
                        //         level={course.level}
                        //         content={course.content}
                        //     />
                        // </DefaultLayout>
                        <UserLayoutLearning>
                            <CoursePageUser />
                        </UserLayoutLearning>
                    }
                />
            ))}
            <Route
                path="/blog"
                element={
                    <DefaultLayout>
                        <Blog />
                    </DefaultLayout>
                }
            />
            <Route path="/newpost" element={<WriteBlog />} />
            <Route path="signin" element={<AuthLayout type="signin" />} />
            <Route path="signup" element={<AuthLayout type="signup" />} />
        </Routes>
    )
}

export default App
