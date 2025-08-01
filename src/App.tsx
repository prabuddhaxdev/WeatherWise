import { BrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>Hello</Layout>
      </BrowserRouter>
    </div>
  )
}

export default App