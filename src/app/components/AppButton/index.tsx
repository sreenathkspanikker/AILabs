import React from 'react'
import { Button } from 'react-bootstrap'
import styles from './button.module.scss'

// images
import Icarrow from '../../../../public/ic-arrow.svg'

const AppButton = ({ variant, children, arrow = false, className, onClick }: any) => {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            className={`${styles.button} ${styles[variant]} ${className}`}
        >
            {children}
            {arrow && <Icarrow />}
        </Button>
    )
}

export default AppButton