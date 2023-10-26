
import React from 'react'
import { useEffect } from 'react';

const TextToSpeech = () => {
  useEffect(() => {
    document.title = "Text to Speech";
  })
  return (
    <section className="text-to-speech-section">this is text to speech</section>
  )
}

export default TextToSpeech;