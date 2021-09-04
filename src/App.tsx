import React from "react"
import routes from "./constants/routes"
import LoginPage from "./pages/Login"
import RegisterPage from './pages/Register'
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Route path={routes.login} component={LoginPage} exact />
      <Route path={routes.register} component={RegisterPage} exact />
      <Route path={routes.home} component={HomePage} exact />
    </BrowserRouter>
  )
}

export default App