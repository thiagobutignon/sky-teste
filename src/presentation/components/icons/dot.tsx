import React from 'react'

const Dot: React.FC = (props) => {
  const { children } = { ...props }
  return (
    <span
      style={{
        background: '#fafaff',
        borderRadius: '20px 50%',
        textAlign: 'center',
        marginRight: '10px',
        display: 'inline-block',
        padding: '6px',
        marginTop: '16px',
        marginLeft: '2%'
      }}
    >
      {children}
    </span>
  )
}

export default Dot
