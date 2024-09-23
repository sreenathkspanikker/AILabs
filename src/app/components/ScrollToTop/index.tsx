import { useEffect, useState } from 'react';
import styles from './scroll.module.scss'; 
import AppButton from '../AppButton';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section2 = document.getElementById('section2');
            if (section2) {
                const rect = section2.getBoundingClientRect();
                // Check if the user is within the section2 boundaries
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AppButton
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
        >
            ↑
        </AppButton>
    );
};

export default ScrollToTop;
