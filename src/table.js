import React from 'react'
import styled from 'styled-components'
import {
  Paper as MaterialPaper,
  Table as MaterialTable,
  TableCell as MaterialTableCell,
  TableBody,
  TableHead,
  TableRow,
  withTheme,
} from '@material-ui/core'

const MainTable = ({ children }) => (
  <Paper>
    <MaterialTable padding='checkbox'>
      {children}
    </MaterialTable>
  </Paper>
)

const Paper = styled(MaterialPaper)`
  && {
    overflow-x: auto;
  }
`

const TableCell = ({ center, ...props }) => (
  <StyledTableCell {...props} />
)

const StyledTableCell = styled(MaterialTableCell)`
  text-align: ${({ center }) => center ? 'center' : null}
`

const Th = withTheme()(
  styled(TableCell)`
    && {
      background-color: ${({ theme }) => theme.pallete.common.black};
      color: ${({ theme }) => theme.pallete.common.white};
    }
  `
)

const Td = styled(TableCell)`
  && {
    font-size: 14px;
  }
`

export {
  MainTable as Table,
  TableBody as TBody,
  TableHead as THead,
  TableRow as Tr,
  Th,
  Td
}
