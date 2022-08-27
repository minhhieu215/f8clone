import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AuthLayout } from './layouts/AuthLayout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CoursePage, CoursePageContainer } from './pages/CoursePageContainer'
import Home from './pages/Home'
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
                path="/courses/html-css"
                element={
                    <DefaultLayout>
                        <CoursePage />
                    </DefaultLayout>
                }
            />
            <Route path="signin" element={<AuthLayout type="signin" />} />
            <Route path="signup" element={<AuthLayout type="signup" />} />
        </Routes>
    )
}

export default App
