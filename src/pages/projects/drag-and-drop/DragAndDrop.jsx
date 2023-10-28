
import React, { useEffect } from 'react'

const DragAndDrop = () => {

  useEffect(() => {
    document.title = "Drag & Drop";
  }, [])
  
  return (
    <section className="drag-and-drop-section"></section>
  )
}

export default DragAndDrop