import React, { Fragment } from 'react'
import './modal.css'

const ModalAdvancedTechnique = ({ technique, closeModal }) => (
  <Fragment>
    <div className='overlay' onClick={closeModal} />
    <div className='modal'>
      <h2>{technique}</h2>
    </div>
  </Fragment>
)

export default ModalAdvancedTechnique
