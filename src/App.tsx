import { BrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout"
import { ThemeProvider } from "./context/theme-provider"

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
          <Layout>Hello</Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App