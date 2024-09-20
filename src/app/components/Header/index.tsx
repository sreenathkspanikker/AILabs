"use client"

/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive';
import { Container, Nav, Navbar } from 'react-bootstrap'

import styles from './header.module.scss'

// Components
import Humburger from './Humburger'

// Images
import Image from 'next/image';

const Header = () => {
  const [isMenu, setMenu] = useState<boolean>(false)
  const isSmallDevice = useMediaQuery({ maxWidth: 992 });

  const handleClick = () => setMenu((prev) => !prev);

  return (
    <header className={`${styles.header} ${isSmallDevice ? styles.smallDevice : ""} ${isMenu ? styles.open : styles.close }`}>

      {isSmallDevice ? (
        <Container className={styles.container}>
          <Navbar.Brand className={styles.navLogo}>
            <Image src="/logo.gif" className='img-responsive' width={800} height={319} alt='logo' />
          </Navbar.Brand>
          <Humburger  onClick={handleClick}/>
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
  )
}

export default Header