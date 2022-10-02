import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { auth } from '../firebase/config'
const AuthContext = React.createContext()
const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setUser(user)
                navigate('/')
            } else {
                navigate('/signin')
            }
        })
    }, [])

    const [user, setUser] = React.useState()
    const value = { user, setUser }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
export { AuthContext }
export default AuthProvider
