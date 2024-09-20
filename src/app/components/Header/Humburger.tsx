import React from 'react'
import AppButton from '../AppButton'

const Humburger = ({ onClick }: any) => {
    return (
        <AppButton variant='hamburger' onClick={onClick}>
            <span></span>
            <span></span>
        </AppButton>
    )
}

export default Humburger