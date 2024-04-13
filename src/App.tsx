import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./authentication/login/login"
import Dashboard from "./Dashboard/dashboard"
import Registration from "./authentication/registration/Registration"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard/>} path="/"/>
        <Route element={<Login/>}  path="/login" />
        <Route element={<Registration/>}  path="/signUp" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
