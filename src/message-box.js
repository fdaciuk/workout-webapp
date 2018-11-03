import React from 'react'
import { withStyles } from '@material-ui/core'

const MessageBox = ({ classes, className, children }) => (
  <div className={`${classes.messageBox} ${className || ''}`}>
    {children}
  </div>
)

const styles = {
  messageBox: {
    margin: '10px 0',
    borderRadius: 5,
    border: '1px solid',
    padding: 20,
  }
}

export default withStyles(styles)(MessageBox)
