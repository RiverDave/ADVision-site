"use client"
import { createContext, useContext, useState } from "react"

const ResponseContext = createContext()

export const useResponse = () => useContext(ResponseContext)

export const ResponseProvider = ({ children }) => {
  const [response, setResponse] = useState(null)
  const [imagePlaceholder, setImagePlaceholder] = useState("")
  const contextValue = {
    response,
    setResponse,
    imagePlaceholder,
    setImagePlaceholder,
  }
  return (
    <ResponseContext.Provider value={contextValue}>
      {children}
    </ResponseContext.Provider>
  )
}
