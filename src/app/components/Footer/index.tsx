" use client"
/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './footer.module.scss'

// assets
import Logo from '../../../../public/logo.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <Container>
                    <Row className={`${styles.row} justify-space-between`}>
                        <Col>
                            <Logo />
                        </Col>
                        <Col >
                            <h5>Contact Details</h5>
                            <p>Aaron D'cruz</p>
                            <p>+91-9036100018</p>
                            <p> <Link href="mailto:aaron@bluebot.in"> aaron@bluebot.in </Link></p>
                        </Col>
                        <Col>
                            <h5 >Office Address</h5>
                            <p >
                                Devatha Plaza 606, 6th Floor, Field Marshal Cariappa Rd, Shanthala
                                Nagar, Ashok Nagar, Bengaluru, Karnataka 560025
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.footerBottom}>
                <Container>
                    &copy; <span id="cYear"></span>
                    <span>Artifical Labs. All rights reserved.</span>
                </Container>
            </div>
        </footer>
    )
}

export default Footer