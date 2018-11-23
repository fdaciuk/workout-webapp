import React from 'react'
import css from 'strclass'
import {
  Paper,
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles
} from '@material-ui/core'


const MainTable = ({ classes, children }) => (
  <Paper className={classes.paper}>
    <MaterialTable padding='checkbox'>
      {children}
    </MaterialTable>
  </Paper>
)

const StyledTable = withStyles({
  paper: {
    overflowX: 'auto'
  }
})(MainTable)

const makeCell = (newTheme) => (
  withStyles((theme) => ({
    cell: newTheme(theme),

    center: {
      textAlign: 'center'
    }
  }))(({ classes, center, ...props }) => (
    <TableCell {...props} className={css({ [classes.center]: center }, classes.cell)} />
  ))
)

const Th = makeCell((theme) => ({
  backgroundColor: theme.pallete.common.black,
  color: theme.pallete.common.white
}))

const Td = makeCell(() => ({ fontSize: 14 }))

export {
  StyledTable as Table,
  TableBody as TBody,
  TableHead as THead,
  TableRow as Tr,
  Th,
  Td
}
