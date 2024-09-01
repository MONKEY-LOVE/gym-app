import {  Routes, Route } from "react-router-dom"
import LoginPage from "./pages/Auth/LoginPage"
import Error404 from "./pages/Error404"
const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

    </div>
  )
}

export default App