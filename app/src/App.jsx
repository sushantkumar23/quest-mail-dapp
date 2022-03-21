import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { Signin } from "./pages/Signin"
import { Main } from "./pages/loggedin/index"
import theme from "./theme"
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route path="/mail" component={Main} />
            <Route path="/" component={Signin} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
