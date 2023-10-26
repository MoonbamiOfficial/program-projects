
import React from 'react'
import { useEffect } from 'react';
import './style.scss';

const TextToSpeech = () => {
  useEffect(() => {
    document.title = "Text to Speech";
  })
  return (
    <section className="text-to-speech-section">
      <h1>Text to Speech</h1>
      <textarea name="" id="input-area" className="js-input-area" placeholder="Aa"></textarea>
      <div className="row">
        <select name="" id="voices" className="js-voices"></select>
        <button className="js-listen-btn listen-btn">
          <i class="fa-solid fa-play"></i>
          Listen
        </button>
      </div>
    </section>
  )
}

export default TextToSpeech;