import React from 'react'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [numberActive, setNumberActive] = React.useState(0)
    const [isUser, setIsUser] = React.useState(true)
    const value = { numberActive, setNumberActive, isUser, setIsUser }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export { AppContext }
export default AppProvider
