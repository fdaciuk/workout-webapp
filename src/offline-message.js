import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import { WifiOff } from '@material-ui/icons'

const OfflineMessage = ({ classes }) => (
  <Typography className={classes.offline} variant='button'>
    <WifiOff />
    Você está offline
  </Typography>
)

const styles = {
  offline: {
    background: 'red',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,

    '& svg': {
      marginRight: 10
    }
  }
}

export default withStyles(styles)(OfflineMessage)
