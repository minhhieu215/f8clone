import React, { ReactNode } from 'react'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [numberActive, setNumberActive] = React.useState(0)
    const value = { numberActive, setNumberActive }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export { AppContext }
export default AppProvider
