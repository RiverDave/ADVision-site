import { ResponseProvider as ResProvider } from "@/context/responseContext"

const ResponseProvider = ({ children }) => {
  return <ResProvider>{children}</ResProvider>
}

export default ResponseProvider
