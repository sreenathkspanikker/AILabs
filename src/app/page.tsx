"use client"

/* eslint-disable react/no-unescaped-entities */
import {useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Container, Figure, FigureCaption } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

// theme
import styles from './page.module.scss';
import theme from './lib/theme.module.scss';

// Components
import Mainframe from './components/Mainframe';
import OurClients from './components/OurClients';

// Images
import Logo from '../../public/logo.svg'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on reload
  }, []); // The empty array ensures this runs only once when the component mounts


  return (
    <main className={styles.home}>
      <Mainframe />

      <section className={`${theme.section} ${styles.section1}`}>
        <Container>
          <video className="video-responsive" autoPlay loop muted>
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section2}`}>
        <Container>
          <Image className="img-responsive" src="/videos/second-fold.gif" alt="" width={300} height={300} />
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section3}`}>
        <Container>
          <video className="video-responsive" controls muted>
            <source src="/videos/showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section4}`}>
        <Container>
          <h1 className="titles text-center">About Us</h1>
          <h2>
            Artificial Labs stemmed from a hunch - actually more like an
            educated guess that there are far more efficient ways to make and
            produce films. And that’s when a dedicated team of directors,
            artists, writers, technologists, cinematographers, editors and VFX
            specialists decided to invest time and effort to master Generative
            AI and its arsenal of tools to supercharge our collective experience
            and skill sets. The results as you will see below, speak for
            themselves. Note, everything from the visuals to VO to music was
            artificially generated.
          </h2>
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section5}`} id="what-we-do">
        <Image src="/BallAction_1loop.gif" alt="bg" fill />
        <Container>
          <h1 className="titles text-center">What We Do</h1>

          <div className={styles.imageGrid}>
            <Figure className={styles.gridOne} />
            <Figure className={styles.gridTwo} />
            <Figure className={styles.gridThree} />
          </div>

        </Container>
      </section>

      <section className={`${theme.section} ${styles.section6}`} id="meet-our-team">
        <Container>
          <h1 className="titles text-center">Meet Our Team</h1>

          <div className={styles.teamRowOne}>
            <Figure>
              <div className={styles.figureImage}>
                <Image src="/Vinod.png" alt="team" fill />
                <FigureCaption className={styles.figCaption}>
                  <h2>Vinod Sekhar</h2>
                  <p>Executive Director/Co-Founder</p>
                </FigureCaption>
              </div>
              <p className={styles.description}>
                <strong>Vinod Sekhar</strong> is the Chairman of the Petra group,
                a global conglomerate that embraces technological innovation across sectors to create positive social and
                economic change. With his strong passion for filmmaking, Vinod has produced notable Hollywood films such as The
                Legend of Tarzan and has won three prestigious awards at the Tapeu Golden Horse awards for his Hongkong produced
                film The Sunny Side of the Street. Incidentally Vinod has also produced India’s first Oscar Nominated film -
                Liars Dice. He is currently working on his own feature while mentoring Artificial to become a global Gen AI
                powerhouse.
              </p>
            </Figure>
            <Figure>
              <div className={styles.figureImage}>
                <Image src="/Carl.png" alt="team" fill />
                <FigureCaption className={styles.figCaption}>
                  <h2>Carl Savio</h2>
                  <p>Executive Director/Co-Founder</p>
                </FigureCaption>
              </div>
              <p className={`${styles.description} ${styles.alignRight}`}>
                <strong>Carl Savio</strong> is a writer, creative technologist and
                film director with over 20 years of experience. He is also the founder of Bluebot Digital, an award-winning
                creative agency established in 2016 that works closely with some of India’s leading brands. With his strong
                understanding of traditional film making techniques he’s now looking forward to create real-world value and
                impact with Artificial Labs.
              </p>
            </Figure>
          </div>
          <div className={`${styles.teamRowOne} ${styles.teamRowTwo}`}>
            <Figure>
              <div className={styles.figureImage}>
                <Image src="/Gagan.png" alt="team" fill />
                <FigureCaption className={styles.figCaption}>
                  <h2>Gagan Naidu</h2>
                  <p>Senior Creative Director</p>
                </FigureCaption>
              </div>
            </Figure>
            <Figure>
              <div className={styles.figureImage}>
                <Image src="/Daniel.png" alt="team" fill />
                <FigureCaption className={styles.figCaption}>
                  <h2>Daniel Cherian</h2>
                  <p>Studio Head</p>
                </FigureCaption>
              </div>
            </Figure>
            <Figure>
              <div className={styles.figureImage}>
                <Image src="/Aaron.png" alt="team" fill />
                <FigureCaption className={styles.figCaption}>
                  <h2>Aaron D'cruz</h2>
                  <p>Talent Director</p>
                </FigureCaption>
              </div>
            </Figure>
          </div>

        </Container>
      </section>

      <section className={`${theme.section} ${styles.section7}`} id="our-clients">
        <Container>
          <h1 className="titles text-center">Our Clients</h1>
          <OurClients />
        </Container>
      </section>

      <section className={`${theme.section} ${styles.section8}`} id="contact-us">
        <Container>
          <h1 className="titles text-center">Connect with us</h1>
          <div className={styles.socialMenu}>
            <Link href="http://www.youtube.com/@ArtificialLabsAI" target="blank"><FontAwesomeIcon icon={faYoutube} className="fa-fw" /></Link>
            <Link href="https://www.instagram.com/artificiallabs.in/" target="blank"><FontAwesomeIcon icon={faInstagram} className="fa-fw" /></Link>
            <Link href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="fa-fw" /></Link>
          </div>
        </Container>
      </section>

    </main>
  );
}
