// components/TypingText.js
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./typingText.module.scss"; // CSS Module for styling

const TypingText = () => {
  const textRef = useRef<any>();

  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const chars = textRef.current.querySelectorAll("span");

    // GSAP typing animation for each character with ScrollTrigger
    gsap.fromTo(
      chars,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        delay: 0.2,
        stagger: 0.08,  // Slower stagger between each character (adjust this to make typing slower)
        duration: 0.2,  // Increase duration for each character animation (slightly slower typing)
        ease: "power1.inOut", // Smooth easing for the typing effect
        scrollTrigger: {
          trigger: textRef.current, // Start animation when this element comes into view
          start: "top 80%", // When the top of the element is 80% from the top of the viewport
          toggleActions: "play none none none", // Play the animation once when triggered
        },
      }
    );
  }, []);

  const text = `The Film opens ------------- on a boat, in a castle, on Mount Everest, on two aliens eating dinner, in Jamaica, on a beach in Jamaica, under a grimy bridge in Brooklyn, at a funeral, in 18th century France ...........`;

  return (
    <div className={styles.typingText} ref={textRef}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TypingText;
