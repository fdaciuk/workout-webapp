import React from 'react'

const Space = ({ children, horizontal, vertical }) => {
  const space = '20px'
  return (
    <div style={{ padding: `${vertical ? space : '0'} ${horizontal ? space : '0'}`}}>
      {children}
    </div>
  )
}

export default Space
