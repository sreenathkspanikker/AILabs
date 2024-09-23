"use client";

import Link from 'next/link';
import Image from 'next/image';
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./mainframe.module.scss";
import Header from "../Header";
import AppButton from '../AppButton';

gsap.registerPlugin(ScrollTrigger);

const MinframeAnime = () => {
    const logoRef = useRef<any>(null);
    const pLogoRef = useRef<any>(null);
    const arrowDown = useRef<any>(null);
    const locationCardsRef = useRef<any>([]);
    const isSmallDevice = useMediaQuery({ maxWidth: 992 });

    useGSAP(() => {
        if (logoRef && locationCardsRef && pLogoRef) {
            if (!isSmallDevice) {
                document.body.style.overflow = "hidden";
            }

            gsap.set(pLogoRef.current, { autoAlpha: 0 });
            gsap.set(arrowDown.current, { autoAlpha: 1 });

            gsap.to(logoRef.current, {
                duration: 1,
                keyframes: {
                    "0%": { width: 0, opacity: 0 },
                    "70%": { width: '10rem,', opacity: 0.4 },
                    "100%": { width: "40rem", opacity: 1 },
                },
                stagger: 0.2,
                ease: "power2.inOut",
                onComplete: function () {
                    logoRef.current.play();
                    gsap.delayedCall(3, () => {
                        gsap.to(logoRef.current, {
                            duration: 1,
                            position: "relative",
                            width: "15%",
                            top: "-5px",
                            left: "20px",
                            transform: "translate(0, 0)",
                            ease: "power2.inOut",
                            onComplete: function () {
                                gsap.to(pLogoRef.current, { autoAlpha: 1, duration: 0 });
                                gsap.to(pLogoRef.current, {
                                    width: "10%",
                                    top: "20px",
                                    left: "calc(20px + 17%)",
                                    transform: "translate(0, 0)",
                                    ease: "power2.inOut",
                                });

                                locationCardsRef.current.play();
                                const locationCards = gsap.utils.toArray([locationCardsRef.current, pLogoRef.current]);
                                locationCards.forEach((card: any) => {
                                    const anim = gsap.fromTo(card, { autoAlpha: 0, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
                                    ScrollTrigger.create({
                                        trigger: card,
                                        animation: anim,
                                        toggleActions: "play none none none",
                                        once: true,
                                    });
                                });

                                document.body.style.overflowY = "auto";
                                gsap.to(arrowDown.current, { autoAlpha: 1, duration: 1 });
                            },
                        });
                    });
                },
            });

            ScrollTrigger.create({
                trigger: logoRef.current,
                start: "top top",
                end: "bottom top",
                onEnterBack: () => {
                    gsap.to(logoRef.current, {
                        duration: 1,
                        width: "40rem",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, 250%)",
                        ease: "power2.inOut",
                    });
                },
                onLeave: () => {
                    gsap.to(logoRef.current, {
                        duration: 1,
                        width: "15%",
                        top: "-5px",
                        left: "20px",
                        transform: "translate(0, 0)",
                        ease: "power2.inOut",
                    });
                },
                onEnter: () => {
                    gsap.to(logoRef.current, {
                        duration: 1,
                        width: "15%",
                        top: "15px",
                        left: "20px",
                        transform: "translate(0, 0)",
                        ease: "power2.inOut",
                    });
                },
            });

            // ScrollTrigger to hide arrowDown when scrolling down
            ScrollTrigger.create({
                trigger: "#section2", // or any other element you want as a reference for the scroll point
                start: "top bottom",
                end: "top top",
                onEnter: () => gsap.to(arrowDown.current, { autoAlpha: 0, duration: 0.5 }),
                onLeaveBack: () => gsap.to(arrowDown.current, { autoAlpha: 1, duration: 0.5 }),
            });

            gsap.set([locationCardsRef.current], { autoAlpha: 0 });

            gsap.to(locationCardsRef.current, {
                scrollTrigger: {
                    trigger: locationCardsRef.current,
                    start: "top center",
                    end: "bottom top",
                    scrub: 3,
                    markers: false,
                    onLeave: () => gsap.to([locationCardsRef.current, pLogoRef.current], { autoAlpha: 0, duration: 2 }),
                },
                autoAlpha: 0,
                duration: 2,
            });

            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        }
    }, []);

    return (
        <div className={`${styles.animeWrap} ${isSmallDevice ? styles.smallDevice : ""}`}>
            <Header />
            <Container className={styles.container}>
                {isSmallDevice ? (
                    <Image className={styles.locationAnime} src="/location.gif" alt="location" width={800} height={282} />
                ) : (
                    <>
                        <Link className={styles.navBrand} href="/">
                            <video className="logo" ref={logoRef} muted autoPlay>
                                <source src="./videos/Logo.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </Link>

                        <video className={styles.subLogo} ref={pLogoRef} autoPlay muted>
                            <source src="./videos/petra-logo.webm" />
                        </video>

                        <video className={styles.location} ref={locationCardsRef} autoPlay muted loop>
                            <source src="./videos/weblocation1.webm" type="video/webm" />
                        </video>
                    </>
                )}
                <Link href="#section2" ref={arrowDown} className={styles.arrowDown}>
                    <FontAwesomeIcon icon={faArrowDown} className="fa-fw" />
                </Link>
            </Container>
        </div>
    );
};

export default MinframeAnime;
