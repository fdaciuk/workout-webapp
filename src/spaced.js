import React from 'react'
import t from 'prop-types'

const Space = ({ children, horizontal, vertical }) => {
  const space = '20px'
  return (
    <div style={{ padding: `${vertical ? space : '0'} ${horizontal ? space : '0'}` }}>
      {children}
    </div>
  )
}

Space.propTypes = {
  children: t.node.isRequired,
  horizontal: t.bool,
  vertical: t.bool
}

export default Space
