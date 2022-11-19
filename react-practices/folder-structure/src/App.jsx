import React from 'react'
import folderStructure from './tree.json'
import { File, Folder } from './components'

const App = () => {
  const indent = 0
  return (
    <>
      <h1 className="title">My Folder Structures</h1>
      <div className="folder-container">
        {folderStructure.map((node) => {
          if (!node.children) return <File name={node.name} indent={indent} />
          return (
            <Folder name={node.name} children={node.children} indent={indent} />
          )
        })}
      </div>
    </>
  )
}

export default App
