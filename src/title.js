import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const Title = ({ children, classes }) => (
  <Typography variant='h3' component='h2' className={classes.title}>
    {children}
  </Typography>
)

const styles = {
  title: {
    margin: '10px 0 30px'
  }
}

export default withStyles(styles)(Title)
