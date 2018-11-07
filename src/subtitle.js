import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const Subtitle = ({ classes, children }) => (
  <Typography variant='h5' component='h3' className={classes.subtitle}>
    {children}
  </Typography>
)

const styles = {
  subtitle: {
    margin: '5px 0'
  }
}

export default withStyles(styles)(Subtitle)
