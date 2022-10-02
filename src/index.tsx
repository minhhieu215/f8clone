import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyles from './components/GlobalStyles/GlobalStyles'
import AppProvider from './context/AppContext'
import AuthProvider from './context/AuthContext'
import './index.css'
import theme from './theme'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <AppProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalStyles />
                        <App />
                    </ThemeProvider>
                </AppProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
