import React, { Fragment } from "react"
import { Route, Switch } from "react-router-dom"
import { Box, useTheme } from "@mui/material"

import { Navbar } from "../../components"
import { Inbox } from "./Inbox"

export function Main(props) {
  const theme = useTheme()

  return (
    <Fragment>
      <Navbar />

      <Box
        sx={{
          width: { sm: "calc(100% - 240px)" },
          mt: { sm: theme.spacing(8), xs: theme.spacing(7) },
          ml: { sm: theme.spacing(30) },
        }}
      >
        <Switch>
          <Route path="/mail/inbox" component={Inbox} />
        </Switch>
      </Box>
    </Fragment>
  )
}
