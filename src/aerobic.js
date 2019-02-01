import React from 'react'
import t from 'prop-types'
import Subtitle from './subtitle'
import { Table, TBody, Tr, Th, Td } from './table'
import Space from './spaced'

const Aerobic = ({ days }) => (
  <Space horizontal>
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
  </Space>
)

Aerobic.propTypes = {
  days: t.object.isRequired
}

export default Aerobic
