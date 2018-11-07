import React, { Fragment } from 'react'
import Subtitle from './subtitle'
import { Table, TBody, Tr, Th, Td } from './table'

const Aerobic = ({ days }) => (
  <Fragment>
    <Subtitle>
      <strong>Aeróbicos</strong>
    </Subtitle>

    <Table>
      <TBody>
        {Object.entries(days).map(([day, time]) => (
          <Tr key={day}>
            <Th style={{ width: 100 }}>{day}</Th>
            <Td>{time}</Td>
          </Tr>
        ))}
      </TBody>
    </Table>
  </Fragment>
)

export default Aerobic
