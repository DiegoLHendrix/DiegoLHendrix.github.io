import './index.scss'
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const FinalProject = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const strFinal = "Simple Security System"

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);
    return (
        <>
            <div className={"container final-page"}>
                <div className={"text-zone"}>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={strFinal.split("")}
                            idx={13}
                        />
                    </h1>
                    <p className={'mcu-text'}>
                        <strong>Objective:</strong><br/>
                        The goal of this project was to use the skills and knowledge about the MSP432 and its
                        capabilities
                        we gained throughout the semester. This goal was achieved by creating our own independent
                        project
                        based on our own interests using at least 5 components from the course. My partner, Mike Herr,
                        and I
                        decided to use the MSP432 along with an Arduino Mega and two ESP32-S3s to make a security
                        system.<br/><br/>

                        <strong>Components:</strong><br/>
                        Components used in this project
                        <li>Hardware Interrupts</li>
                        <li>Timers</li>
                        <li>Arduino ADC</li>
                        <li>Motion Sensor</li>
                        <li>IR Sensing</li>
                        <li>Speaker</li>
                        <br/>

                        <strong>Problems:</strong><br/>
                        Problems faced with during the development of this project
                        <li>Hardware Interrupts</li>
                        <li>Timers</li>
                        <li>Arduino ADC</li>
                        <li>Motion Sensor</li>
                        <li>IR Sensing</li>
                        <li>Speaker</li>
                        <br/>

                        <strong>Solutions:</strong><br/>
                        Steps my partner and I took to solve the aforementioned problems
                        <li>Hardware Interrupts</li>
                        <li>Timers</li>
                        <li>Arduino ADC</li>
                        <li>Motion Sensor</li>
                        <li>IR Sensing</li>
                        <li>Speaker</li>
                        <br/>

                        <strong>Conclusion:</strong><br/>

                    </p>
                </div>
            </div>
            <Loader type={"pacman"} active/>
        </>
    )
}

export default FinalProject