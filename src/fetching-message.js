import React from 'react'
import MessageBox from './message-box'
import { Typography, withStyles } from '@material-ui/core'

const FetchingMessage = ({ classes }) => (
  <MessageBox className={classes.loading}>
    <Typography>
      Buscando informações do seu treino...
    </Typography>
  </MessageBox>
)

const styles = {
  loading: {
    background: '#e5e0ff',
    borderColor: '#b2a3ff',
    color: '#4a0fd8',
  }
}

export default withStyles(styles)(FetchingMessage)
