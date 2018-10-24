import React, { Fragment } from 'react'

const Aerobic = ({ days }) => (
  <Fragment>
    <h2>Aeróbicos</h2>
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
