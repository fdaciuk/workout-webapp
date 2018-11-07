import React from 'react'
import { AppBar, Tabs as MaterialTabs, Tab, withStyles } from '@material-ui/core'

const Tabs = ({ classes, tab, setTab }) => (
  <AppBar className={classes.paper} position='static'>
    <MaterialTabs value={tab}>
      <Tab label='Treinos' onClick={() => setTab(0)} />
      <Tab label='Aeróbicos' onClick={() => setTab(1)} />
    </MaterialTabs>
  </AppBar>
)


const styles = {
  paper: {
    marginBottom: 20
  }
}

export default withStyles(styles)(Tabs)
