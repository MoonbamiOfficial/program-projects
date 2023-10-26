
import React from 'react'
import { useEffect } from 'react';
import './style.scss';

const TextToSpeech = () => {
  useEffect(() => {
    document.title = "Text to Speech";
  })
  return (
    <section className="text-to-speech-section">

    </section>
  )
}

export default TextToSpeech;