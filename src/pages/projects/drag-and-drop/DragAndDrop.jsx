
import React, { useEffect } from 'react';
import './style.scss';

const DragAndDrop = () => {
  let lists = document.getElementsByClassName('item');
  let rightBox = document.getElementById('right');
  let leftBox = document.getElementById('#left');
  
  for(list of lists) {
    list.addEventListener('dragstart', function(e) {
      let selected = e.target;
      
      rightBox.addEventListener('dragover', function(e) {
        e.preventDefault();
      })
      rightBox.addEventListener('drop', function(e) {
        rightBox.appendChild(selected);
        selected = null;
      })

      leftBox.addEventListener('dragover', function(e) {
        e.preventDefault();
      })
      leftBox.addEventListener('drop', function(e) {
        leftBox.appendChild(selected);
        selected = null;
      })
    })
  }

  useEffect(() => {
    document.title = "Drag & Drop";
  
  }, [])
  
  return (
    <section className="drag-and-drop-section">
      <div id="left" className="box">
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
      <div id="right" className="box"></div>
    </section>
  )
}

export default DragAndDrop;