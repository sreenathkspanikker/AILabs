/* eslint-disable react/no-unescaped-entities */
'use client'

import gsap from 'gsap';
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import styles from './mainframe.module.scss'

// Components
import AppButton from '../AppButton'
import MinframeAnime from './MinframeAnime'

const Mainframe = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // Animate the title
    gsap.fromTo(
      `.${styles.title}`,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Animate the paragraph
    gsap.fromTo(
      `.${styles.paragraph}`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
    );

    // Animate the image with a fade-in and blinking effect
    gsap.fromTo(
      `.${styles.image}`,
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'power2.in',
        yoyo: true,
      }
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const imageX = (x - rect.left) / rect.width * 2 - 1; // Map to range [-1, 1]
        const imageY = (y - rect.top) / rect.height * 2 - 1; // Map to range [-1, 1]

        gsap.to(imageRef.current, {
          x: imageX * 20, // Adjust for the amount of movement
          y: imageY * 20, // Adjust for the amount of movement
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.mainframe}>
      <MinframeAnime />
    </div>
  )
}

export default Mainframe
