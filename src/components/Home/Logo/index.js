import React, { useRef } from 'react';
import LogoD from '../../../MyImages/LogoD.png'
import './index.scss'

const Logo = () => {
    const imageRef = useRef()

    return (
        <div className="logo-container">
            <img
                ref={imageRef}
                src={LogoD}
                alt={'D'}
            />


        </div>
    )
}

export default Logo