import React, { Fragment } from 'react'
import Title from './title'
import { Table, TBody, Tr, Th, Td } from './table'

const Aerobic = ({ days }) => (
  <Fragment>
    <Title>Aeróbicos</Title>

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
