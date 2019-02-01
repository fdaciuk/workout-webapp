import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  AppBar as MaterialAppBar,
  Tabs as MaterialTabs,
  Tab
} from '@material-ui/core'

const Tabs = ({ tab, setTab }) => (
  <AppBar>
    <MaterialTabs value={tab}>
      <Tab label='Treinos' onClick={() => setTab(0)} />
      <Tab label='Aeróbicos' onClick={() => setTab(1)} />
    </MaterialTabs>
  </AppBar>
)

Tabs.propTypes = {
  tab: t.number.isRequired,
  setTab: t.func.isRequired
}

const AppBar = styled(MaterialAppBar).attrs({ position: 'static' })`
  && {
    margin-bottom: 20px;
  }
`

export default Tabs
