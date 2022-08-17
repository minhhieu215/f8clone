import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { AuthLayout } from './layouts/AuthLayout'
function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DefaultLayout>
                        <h1>PAGE</h1>
                    </DefaultLayout>
                }
            />
            <Route path="signin" element={<AuthLayout type="signin" />} />
            <Route path="signup" element={<AuthLayout type="signup" />} />
        </Routes>
    )
}

export default App
