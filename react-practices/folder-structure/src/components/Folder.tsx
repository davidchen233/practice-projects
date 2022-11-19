import React, { useState } from 'react'
import File from './File'

const Folder = ({ name, children, indent }) => {
  const [isOpen, setIsOpen] = useState(false)

  const newIndent = indent + 1

  const handleToggleFolder = () => setIsOpen((cur) => !cur)

  return (
    <div className="folder" style={{ paddingLeft: `${indent * 15}px` }}>
      <div className="content" onClick={handleToggleFolder}>
        <img
          src={`assets/${isOpen ? 'folderOpen' : 'folder'}.png`}
          alt="folder"
        />
        <p>{`${name} ${isOpen ? '-' : '+'}`}</p>
      </div>
      <div className="more">
        {isOpen &&
          children.map((node) => {
            if (!node.children)
              return <File name={node.name} indent={newIndent} />
            return (
              <Folder
                name={node.name}
                children={node.children}
                indent={newIndent}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Folder
