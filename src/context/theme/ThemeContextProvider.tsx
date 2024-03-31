'use client'
import React, { useEffect, useReducer } from "react";
import themeContext from "./theme-context";
import themeReducer from "./themeReducer";

const ThemeContextProvider = (
    {
        children
    }:{
        children: React.ReactNode
    } 
) => {
  const initialState: Theme= typeof window !== 'undefined' && localStorage.getItem('theme') ?
  JSON.parse(localStorage.getItem('theme') || '{}' ) as Theme : {
      primary: 'color-6',
      bg: 'bg-2'
  }

  const [theme, dispatchTheme] = useReducer(themeReducer, initialState)
  const setTheme = (theme: Primary | Bg) => {
    dispatchTheme({type: theme})
    console.log(theme)
  }
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
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