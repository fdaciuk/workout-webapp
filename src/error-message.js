import React from 'react'
import styled from 'styled-components'
import MessageBox from './message-box'
import { Typography } from '@material-ui/core'
import Space from './spaced'

const ErrorMessage = ({ classes }) => (
  <Space horizontal>
    <MessageBoxError>
      <Title>Deu problema :(</Title>
      <P>Por favor, tente novamente mais tarde.</P>
    </MessageBoxError>
  </Space>
)

const MessageBoxError = styled(MessageBox)`
  background: #ffe0e0;
  border-color: #e8aeae;
`

const styleForTitleAndP = `
  margin: 0;
  color: #c12525;
`

const Title = styled(Typography).attrs({
  variant: 'h6',
  component: 'h2'
})`
  && {
    ${styleForTitleAndP};
  }
`

const P = styled(Typography)`
  && {
    ${styleForTitleAndP};
    margin-top: 10px;
  }
`

export default ErrorMessage
