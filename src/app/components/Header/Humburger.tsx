import { useState } from "react";
import AppButton from '../AppButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const HamburgerButton = ({ onClick }: any) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        if (onClick) {
            onClick(); // Trigger the passed onClick function
        }
    };

    return (
        <AppButton variant="hamburger" onClick={handleClick}>
            <FontAwesomeIcon icon={isActive ? faTimes : faBars} className="fa-fw" />
        </AppButton>
    );
};

export default HamburgerButton;
