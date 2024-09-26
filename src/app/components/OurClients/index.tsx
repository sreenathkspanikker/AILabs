"use client";
import Image from 'next/image';
import React from 'react';
import styles from "./client.module.scss";

const OurClients = () => {
  const clientImages = [
    { src: "/DD.png", alt: "Client 1", width: 250, height: 100 },
    { src: "/N2.png", alt: "Client 2", width: 250, height: 100 },
    { src: "/INBREW.png", alt: "Client 3", width: 250, height: 100 },
    { src: "/P&G.png", alt: "Client 4", width: 250, height: 100 },
    { src: "/UL.png", alt: "Client 5", width: 250, height: 100 }
  ];

  return (
    <div className={styles.clientImages}>
      {clientImages.map((client, index) => (
        <Image key={index} src={client.src} alt={client.alt} width={client.width} height={client.height} />
      ))}
    </div>
  );
};

export default OurClients;
