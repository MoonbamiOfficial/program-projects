
import React, { useEffect } from 'react';
import './style.scss';

const DragAndDrop = () => {

  useEffect(() => {
    document.title = "Drag & Drop";
  }, [])
  
  return (
    <section className="drag-and-drop-section">
      <div id="left-box" className="box"></div>
      <div id="right-box" className="box">
        <div className="item" draggable="true">
          <i className="fa-solid fa-grip-vertical"></i>
          Item One
        </div>
        <div className="item" draggable="true">
          <i className="fa-solid fa-grip-vertical"></i>
          Item Two
        </div>
        <div className="item" draggable="true">
          <i className="fa-solid fa-grip-vertical"></i>
          Item Three
        </div>
        <div className="item" draggable="true">
          <i className="fa-solid fa-grip-vertical"></i>
          Item Four
        </div>
      </div>
    </section>
  )
}

export default DragAndDrop