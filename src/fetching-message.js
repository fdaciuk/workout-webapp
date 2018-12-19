import React from 'react'
import styled from 'styled-components'
import MessageBox from './message-box'
import { Typography } from '@material-ui/core'
import Space from './spaced'

const FetchingMessage = ({ classes }) => (
  <Space horizontal>
    <MessageBoxFetching>
      <Typography>
        Buscando informações do seu treino...
      </Typography>
    </MessageBoxFetching>
  </Space>
)

const MessageBoxFetching = styled(MessageBox)`
  background: #e5e0ff;
  border-color: #b2a3ff;
  color: #4a0fd8;
`

export default FetchingMessage
