import React, { Fragment } from 'react'
import Title from './title'

const Aerobic = ({ days }) => (
  <Fragment>
    <Title>Aeróbicos</Title>
    <table>
      <tbody>
        {Object.entries(days).map(([day, time]) => (
          <tr key={day}>
            <th>{day}</th>
            <td>{time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
)

export default Aerobic
