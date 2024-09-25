import Image from 'next/image'
import { useState } from 'react';
import { Figure, Modal, Carousel } from "react-bootstrap";
import styles from './wedo.module.scss';
import AppButton from '../AppButton';

const WeDo = () => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (key: any) => {
        setShow(true);
        setModalData(key);
    }

    // Array of video URLs for carousel
    const videosForModal1 = [
        "/videos/cocacola.mp4",
        "/videos/greenLabel2.mp4",
        "/videos/urbanLadder1.mp4",
        "/videos/urbanLadder2.mp4",
        "/videos/greenLabel1.mp4",
        "/videos/ratcity.mp4",
        "/videos/urbanLadder3.mp4",
        "./assets/videos/urbanLadder4.mp4",
        "/videos/urbanLadder5.mp4"
    ];

    // Array of audio data for the third modal
    const audiosForModal3 = [
        { title: "Ab Chal Diye", src: "/audios/AB CHAL DIYE.mp3" },
        { title: "Jeetenge Aasmaan", src: "/audios/JEETENGE AASMAAN.mp3" },
        { title: "Khwaabon Ka Jahan", src: "/audios/KHWAABON KA JAHAN.mp3" },
        { title: "Milenge Wahan", src: "/audios/MILENGE WAHAN.mp3" },
        { title: "Yahin Hai Zindagi", src: "/audios/YAHIN HAI ZINDAGI.mp3" },
    ];

    return (
        <>
            <div className={styles.imageGrid}>
                <Figure className={styles.gridOne} onClick={() => handleShow(1)} />
                <Figure className={styles.gridTwo} onClick={() => handleShow(2)} />
                <Figure className={styles.gridThree} onClick={() => handleShow(3)} />
            </div>

            {/* MODAL 1 - Video Carousel */}
            <Modal show={show && modalData === 1} size="lg" onHide={handleClose} className="modal-social modal-one" centered >
                <Modal.Header closeButton>
                    <Modal.Title>Social Media Content</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel interval={null}>
                        {videosForModal1.map((videoSrc, index) => (
                            <Carousel.Item key={index}>
                                <video controls muted>
                                    <source src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>

            {/* MODAL 2 - Single Video */}
            <Modal show={show && modalData === 2} size="lg" onHide={handleClose} className="modal-social modal-two" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Social Media Content</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <video controls muted>
                        <source src="/videos/narayana.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Modal.Body>
            </Modal>

            {/* MODAL 3 - Music */}
            <Modal show={show && modalData === 3} size="xl" onHide={handleClose} className={`${ styles.modalThree} modal-social modal-three`} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Music</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.insideContent}>
                        <Image src="/gl_logo.png" width={150} height={150} alt="Green Label Logo" />
                        <h1>Green Label - Rich and Smooth</h1>
                    </div>
                    {audiosForModal3.map((audio, index) => (
                        <div className={styles.audioWrap} key={index}>
                            <h3>{audio.title}</h3>
                            <audio controls>
                                <source src={audio.src} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    ))}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default WeDo;
