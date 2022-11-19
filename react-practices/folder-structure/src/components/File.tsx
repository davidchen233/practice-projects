import React from 'react'

const File = ({ name, indent }) => {
  return (
    <div className="file" style={{ paddingLeft: `${indent * 15}px` }}>
      <div className="content">
        <img src="assets/file.png" alt="folder" />
        <p>{name}</p>
      </div>
    </div>
  )
}

export default File
