import './index.scss'
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const FinalProject = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const strFinal = "Security System"

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
                        <li>TimerA</li>
                        <li>Finite State Machines</li>
                        <li>Motion Sensor</li>
                        <li>Speaker</li>
                        <br/>

                        <strong>Overview:</strong><br/>
                        <strong>MSP432</strong><br/>
                        <li>Buzzer - TimerA:
                            Would make a sound when detected a the magnetic latch sensed the magnet was
                            missing.
                        </li>

                        <li>Magnetic latch - Hardware Interrupts:
                            Using a magnet this sensor would send a signal to the MSP432 which would cause the buzzer to
                            make an alarm sound. This would also trigger a hardware interrupt in the MSP432.
                        </li>
                        <br/>

                        <strong>ESP32 #1</strong><br/>
                        <li>Connected to the MSP432 - Hardware Interrupt:
                            When the MSP432 hardware interrupt was triggered it would send a signal to the first ESP32
                            to let it know about the interrupt. This went both ways so if a hardware interrupt was
                            triggered inside the ESP32 then it would send a signal to the MSP432.
                        </li>
                        <li>Keypad:
                            This would be used to input a code into the first ESP32 to arm and disarm the security
                            system. Using red and green leds the keypad would send a signal to the first ESP32 and turn
                            on the red led when armed and green led when unarmed.
                        </li>
                        <br/>

                        <strong>ESP32 #2:</strong><br/>
                        <li>Wifi:
                            Send text messages through wifi using a Whatsapp api called Callmebot. it would send a
                            message
                            "System Secure" when the security system was armed and "System Idle" when the system was
                            unarmed.
                        </li>
                        <li>Motion sensing - ADC:
                            Using an HC-SR501 PIR Sensor, if motion was detected then it would trigger a hardware
                            interrupt
                            in the second ESP32 which would send a signal to the MSP432.
                        </li>

                    </p>
                </div>

                <div className={'img-project1-container'}/>
                <div className={'img-project2-container'}/>
                <div className={'img-project3-container'}/>
                <div className={'img-project4-container'}/>
            </div>
            <Loader type={"pacman"} active/>
        </>
    )
}

export default FinalProject