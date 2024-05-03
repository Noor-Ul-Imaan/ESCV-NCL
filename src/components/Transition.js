import React, { useState, useEffect } from 'react';
import './Transition.css';

const WordFade = () => {
  const words = ['DISCOVER', 'INNOVATE', 'TRANSFORM'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearTimeout(timer);
  }, [currentWordIndex, words.length]);

  return (
    <div className="word-fade-container">
      {words.map((word, index) => (
        <div
          key={index}
          className={`word ${index === currentWordIndex ? 'visible' : 'hidden'}`}
        >
          {word}
        </div>
      ))}

      
    </div>
  );
};

export default WordFade;
