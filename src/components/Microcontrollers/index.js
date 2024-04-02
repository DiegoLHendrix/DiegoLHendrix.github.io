import './index.scss'
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";

const Microcontrollers = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const strMicrocontrollers = "Microcontrollers";

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
        <div className={'container microcontrollers-page'}>
            <div className={'text-zone'}>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={strMicrocontrollers.split("")}
                        idx={15}
                    />
                </h1>


            </div>
        </div>
    )
}

export default Microcontrollers