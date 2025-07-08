import React, { useState, useEffect } from 'react';

function TypingEffect({ 
  texts = ["Build Stunning Websites", "No Coding Required", "Launch in Minutes"], 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = ""
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      const currentFullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        
        if (currentText === currentFullText) {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseTime : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

export default TypingEffect;