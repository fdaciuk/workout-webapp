import React from 'react'
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

const Th = withStyles((theme) => ({
  cell: {
    backgroundColor: theme.pallete.common.black,
    color: theme.pallete.common.white
  }
}))(({ classes, ...props }) => (
  <TableCell {...props} className={classes.cell} />
))

const Td = withStyles({
  cell: {
    fontSize: 14
  }
})(({ classes, ...props }) => (
  <TableCell {...props} className={classes.cell} />
))

export {
  StyledTable as Table,
  TableBody as TBody,
  TableHead as THead,
  TableRow as Tr,
  Th,
  Td
}
