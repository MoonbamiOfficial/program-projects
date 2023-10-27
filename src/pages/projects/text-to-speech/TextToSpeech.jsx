
import React from 'react'
import { useEffect } from 'react';
import './style.scss';

const TextToSpeech = () => {
  let speech = new SpeechSynthesisUtterance();
  let voices = [];
  
  useEffect(() => {
    document.title = "Text to Speech";
    let voiceSelect = document.querySelector('#voiceSelect');
    
    window.speechSynthesis.onvoiceschanged = function() {
      voices = window.speechSynthesis.getVoices();
      speech.voice = voices[0];
      
      voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
      
    }
    voiceSelect.addEventListener('change', () => {
      speech.voice = voices[voiceSelect.value];
    })
  }, [speech, voices])

  return (
    <section className="text-to-speech-section">
      <h1>Text to Speech</h1>
      <textarea name="" id="input-area" className="js-input-area" placeholder="Aa"></textarea>
      <div className="row">
        <select id="voiceSelect"></select>
        <button className="js-listen-btn listen-btn" onClick={() => {
          speech.text = document.querySelector('.js-input-area').value;
          window.speechSynthesis.speak(speech);
        }}>
          <i className="fa-solid fa-play"></i>
          Listen
        </button>
      </div>
    </section>
  )
}

export default TextToSpeech;