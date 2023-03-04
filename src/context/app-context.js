import React, { createContext, useState } from 'react'
import swell from 'swell-js'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const handleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    // init Swell
    swell.init(
        process.env.GATSBY_SWELL_STORE_ID,
        process.env.GATSBY_SWELL_PUBLIC_KEY
    )

    return (
        <AppContext.Provider
            value={{
                isNavOpen,
                handleNav,
                swell,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
