"use client"

/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Container, Nav, Navbar } from 'react-bootstrap'
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import styles from './header.module.scss'

// Components
import Humburger from './Humburger'

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Header = () => {
  const [isMenu, setMenu] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false); // Track if component is mounted
  const isSmallDevice = useMediaQuery({ maxWidth: 992 });

  // Ensure component is mounted before using media query
  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle menu
  const handleClick = () => setMenu((prev) => !prev);

  // GSAP effect to hide/show the logo on scroll
  useGSAP(() => {
    const logo = document.querySelector(`.${styles.petraLogo}`); // Select the logo

    gsap.to(logo, {
      y: -100, // Move the logo up to hide it
      opacity: 0,
      ease: "power2.out",
      duration: 0.5,
      scrollTrigger: {
        trigger: document.body,
        start: "top+=100 top", // Start 100px from the top
        end: "bottom",
        toggleActions: "play none reverse none", // Play when scrolling down, reverse when scrolling up
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: "top+=10 top",
      end: "bottom",
      onEnterBack: () => gsap.to(logo, { y: 0, opacity: 1, duration: 0.5 }),
      onLeave: () => gsap.to(logo, { y: -100, opacity: 0, duration: 0.5 }),
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, [mounted]);

  if (!mounted) return null; // Avoid rendering until mounted

  return (
    <header className={`${styles.header} ${isSmallDevice ? styles.smallDevice : ""} ${isMenu ? styles.open : styles.close}`}>
      {isSmallDevice ? (
        <Container className={styles.container}>
          <div className={styles.headerTop}>
            <div className={styles.logowrap}>
              <Navbar.Brand className={styles.navLogo}>
                <Image src="/logo.gif" className='img-responsive' width={800} height={319} alt='logo' />
              </Navbar.Brand>
              <Image src="/logo-petra.gif" className={`img-responsive ${styles.petraLogo}`} width={400} height={219} alt='ptralogo' />
            </div>
            <Humburger onClick={handleClick} />
          </div>
          {isMenu && (
            <Nav className={styles.navbar}>
              <Link href="/" onClick={handleClick}>Home</Link>
              <Link href="#what-we-do" onClick={handleClick}>Our Work</Link>
              <Link href="#meet-our-team" onClick={handleClick}>Our Team</Link>
              <Link href="#our-clients" onClick={handleClick}>Clients</Link>
              <Link href="#contact-us" onClick={handleClick}>Contact Us</Link>
            </Nav>
          )}
        </Container>
      ) : (
        <Navbar expand="lg" className={styles.navbarWrap}>
          <Container className={styles.container}>
            <Nav className={styles.navbar}>
              <Link href="/">Home</Link>
              <Link href="#what-we-do">Our Work</Link>
              <Link href="#meet-our-team">Our Team</Link>
              <Link href="#our-clients">Clients</Link>
              <Link href="#contact-us">Contact Us</Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </header>
  );
}

export default Header;
