/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useState } from 'react';
import { Figure, FigureCaption, Modal } from "react-bootstrap";

import styles from './team.module.scss';

// component
import AppButton from '../AppButton';

const OurTeam = () => {
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (key: any) => {
        setShow(true);
        setModalData(key);
    }

    return (
        <>

            <div className={styles.teamRowOne}>
                <Figure onClick={() => handleShow('vinod')}>
                    <div className={styles.figureImage}>
                        <Image src="/Vinod.png" alt="team" fill />
                        <FigureCaption className={styles.figCaption}>
                            <h2>Vinod Sekhar</h2>
                            <h3>Executive Director/Co-Founder</h3>
                            <p><strong>Vinod Sekhar</strong> is the Chairman of the Petra group, economic change...</p>
                            <AppButton variant="link" >Read more</AppButton>
                        </FigureCaption>
                    </div>
                </Figure>
                <Figure onClick={() => handleShow('carl')}>
                    <div className={styles.figureImage}>
                        <Image src="/Carl.png" alt="team" fill />
                        <FigureCaption className={styles.figCaption}>
                            <h2>Carl Savio</h2>
                            <h3>Executive Director/Co-Founder</h3>
                            <p> <strong>Carl Savio</strong> is a writer, reative technologist and
                                film director with over 20 years of experience...</p>
                            <AppButton variant="link" >Read more</AppButton>
                        </FigureCaption>
                    </div>
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

            {/* MODAL */}
            <Modal show={show} size="lg" onHide={handleClose} centered className={`${styles.modalTeam} modal-team`}>
                <Modal.Body className={styles.modalBody}>
                    <AppButton variant="close" onClick={handleClose} />
                    <Figure>
                        {modalData === "vinod" ? <Image src="/Vinod.png" alt="team" fill /> : <Image src="/Carl.png" alt="team" fill />}
                    </Figure>
                    <article>
                        {modalData === "vinod" ? (
                            <>
                                <h2>Vinod Sekhar</h2>
                                <h3>Executive Director/Co-Founder</h3>
                                <p >
                                    <strong>Vinod Sekhar</strong> is the Chairman of the Petra group,
                                    a global conglomerate that embraces technological innovation across sectors to create positive social and
                                    economic change. With his strong passion for filmmaking, Vinod has produced notable Hollywood films such as The
                                    Legend of Tarzan and has won three prestigious awards at the Tapeu Golden Horse awards for his Hongkong produced
                                    film The Sunny Side of the Street. Incidentally Vinod has also produced India’s first Oscar Nominated film -
                                    Liars Dice. He is currently working on his own feature while mentoring Artificial to become a global Gen AI
                                    powerhouse.
                                </p>
                            </>
                        ) : <>
                            <h2>Carl Savio</h2>
                            <h3>Executive Director/Co-Founder</h3>
                            <p>
                                <strong>Carl Savio</strong> is a writer, creative technologist and
                                film director with over 20 years of experience. He is also the founder of Bluebot Digital, an award-winning
                                creative agency established in 2016 that works closely with some of India’s leading brands. With his strong
                                understanding of traditional film making techniques he’s now looking forward to create real-world value and
                                impact with Artificial Labs.
                            </p>
                        </>
                        }

                    </article>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default OurTeam