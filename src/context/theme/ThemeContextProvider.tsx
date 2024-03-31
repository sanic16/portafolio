'use client'
import React, { useReducer } from "react";
import themeContext from "./theme-context";
import themeReducer from "./themeReducer";

const ThemeContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    } 
) => {
    const initialState: Theme = {       
        primary: 'color-1',
        bg: 'bg-1'        
    }
  const [theme, dispatchTheme] = useReducer(themeReducer, initialState)
  const setTheme = (theme: Primary | Bg) => {
    dispatchTheme({type: theme})
    console.log(theme)
  }
  return (
    <themeContext.Provider
        value={{
            theme: theme,
            setTheme
        }}
    >
        { children }
    </themeContext.Provider>
  )
}

export default ThemeContextProvider