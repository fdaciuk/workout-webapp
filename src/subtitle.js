import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Subtitle = styled(Typography).attrs({
  variant: 'h5',
  component: 'h3'
})`
  && {
    margin: 5px 0;
  }
`

export default Subtitle
