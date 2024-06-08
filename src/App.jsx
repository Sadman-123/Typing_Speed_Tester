import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;

    if (!startTime) {
      setStartTime(Date.now());
    }

    setText(value);
  };

  useEffect(() => {
    if (text.length === 0) {
      setStartTime(null);
      setWpm(0);
      return;
    }

    const elapsedTime = (Date.now() - startTime) / 1000 / 60; // in minutes
    const wordCount = text.trim().split(/\s+/).length;
    const currentWpm = Math.round(wordCount / elapsedTime);

    setWpm(currentWpm);
  }, [text]);

  return (
    <div className='app'>
      <h1>Typing Speed Tester 🔥</h1>
      <h2>Your Speed is {wpm} WPM</h2>
      <textarea 
        placeholder='Type here...' 
        value={text} 
        onChange={handleChange} 
        rows="10" 
        cols="50"
      />
    </div>
  );
}

export default App;
