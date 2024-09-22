import React, { useEffect, useState, useRef } from "react";
import styles from './typingText.module.scss'

// Text typing component
function CodeAnim() {
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<any>(null);
  const displayedTextRef = useRef("");

  const text = `The Film opens ------------- on a boat, in a castle, on Mount Everest, on two aliens eating dinner, in Jamaica, on a beach in Jamaica, under a grimy bridge in Brooklyn, at a funeral, in 18th century France ...........`;

  useEffect(() => {
    if (text?.length > 0) {
      displayedTextRef.current = text.substr(0, charIndex);

      // Delay before moving to the next character
      timeoutRef.current = setTimeout(() => {
        if (displayedTextRef.current.length === text.length) {
          // Reset to 0 to loop the animation after full text is displayed
          setTimeout(() => {
            setCharIndex(0);
          }, 1500); // Delay before the loop restarts
        } else {
          // Continue typing the current text
          setCharIndex((prevCharIndex) => prevCharIndex + 1);
        }
      }, 150 - Math.random() * 100); // Adjust typing speed

      // Clear the timeout on unmount
      return () => clearTimeout(timeoutRef.current);
    }
  }, [charIndex, text]);

  return (
    <div className={styles.typingText}>
      <span>
        {displayedTextRef.current}
        <span className={styles.cursor}>|</span>
      </span>
    </div>
  );
}

export default CodeAnim;
