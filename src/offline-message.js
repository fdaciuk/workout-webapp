import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { WifiOff } from '@material-ui/icons'

const OfflineMessage = () => (
  <OfflineContainer>
    <WifiOff />
    Você está offline
  </OfflineContainer>
)

const OfflineContainer = styled(Typography).attrs({
  variant: 'button'
})`
  && {
    background: red;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    & svg {
      margin-right: 10px;
    }
  }
`

export default OfflineMessage
