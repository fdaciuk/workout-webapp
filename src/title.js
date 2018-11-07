import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const Title = ({ children, classes }) => (
  <Typography variant='h6' component='h2' className={classes.title}>
    {children && children.replace(/(\w)(\w+)/g, (r, a, b) => {
      if (`${a}${b}`.toLowerCase() === 'de') {
        return 'de'
      }
      return `${a}${b.toLowerCase()}`
    })}
  </Typography>
)

const styles = {
  title: {
    margin: '30px 0'
  }
}

export default withStyles(styles)(Title)
