import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Paper as MaterialPaper,
  Table as MaterialTable,
  TableCell as MaterialTableCell,
  TableBody,
  TableHead,
  TableRow
} from '@material-ui/core'

const MainTable = ({ children }) => (
  <Paper>
    <MaterialTable padding='checkbox'>
      {children}
    </MaterialTable>
  </Paper>
)

MainTable.propTypes = {
  children: t.node.isRequired
}

const Paper = styled(MaterialPaper)`
  && {
    overflow-x: auto;
  }
`

const TableCell = ({ center, ...props }) => (
  <StyledTableCell {...props} />
)

TableCell.propTypes = {
  center: t.bool
}

const StyledTableCell = styled(MaterialTableCell)`
  text-align: ${({ center }) => center ? 'center' : null}
`

const Th = styled(TableCell)`
  && {
    background-color: ${({ theme }) => theme.palette.common.black};
    color: ${({ theme }) => theme.palette.common.white};
  }
`

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
