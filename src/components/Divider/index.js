import React from 'react'

const Divider = ({color}) => {
  const colorStyle = {
    display: "block",
    margin: "20px auto",
    width: "50px",
    height: "5px",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: color,
  }

  return (
    <span className="divider" style={colorStyle}>
      
    </span>
  )
}

export default Divider
