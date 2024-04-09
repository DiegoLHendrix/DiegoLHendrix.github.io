import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGitAlt,
    faRust
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

import ms365Svg from '../../assets/icons/microsoft365.svg'
import pythonSvg from '../../assets/icons/python.svg'
import altiumSvg from '../../assets/icons/altium_designer.svg'
import cppSvg from '../../assets/icons/cpp.svg'
import cSvg from '../../assets/icons/c.svg'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const strAbout = "About me"
    const strSelf = "Self Introduction:"
    const strEducation = "Education"
    const strSkills = "Skills"
    const strPersonal = "Personal"
    const strHobbies = "Hobbies"

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
            <div className={'container about-page'}>
                <div className={"img-rit-container"}/>
                <div className={'text-zone'}>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            //takes string splits each character into a separate char then adds it to the array
                            strArray={strAbout.split("")}
                            idx={15}
                        />
                    </h1>

                    <h2 className={"title-self-intro"}>
                        <AnimatedLetters
                            letterClass={letterClass}
                            //takes string splits each character into a separate char then adds it to the array
                            strArray={strSelf.split("")}
                            idx={15}
                        />
                    </h2>

                    <p className={'text-about'}>
                        <ul>
                            I am a Computer Engineering Technology major with a passion for designing and
                            integrating firmware, software, and embedded systems, as well as working with electrical
                            equipment and PCB design. I am actively seeking an internship opportunity where I can
                            leverage my skills in these areas and further challenge myself.
                            Available May 2024 to December 2024.
                        </ul>
                    </p>


                    <h2 className={'title-education'}>
                        <AnimatedLetters
                            letterClass={letterClass}
                            //takes string splits each character into a separate char then adds it to the array
                            strArray={strEducation.split("")}
                            idx={15}
                        />
                    </h2>

                    <p className={'text-about'}>
                        <ul>
                            <li>Bachelor of Science in Computer Engineering Technology.</li>
                            <li>Expected Graduation May 2026.</li>
                            <li>Dean's List Fall 2023.</li>
                            <li>
                                <strong>Current Courses:</strong> Microcontroller Systems, Real-Time Operating
                                Systems, Modern Audio Production.
                            </li>
                            <li>
                                <strong>Completed Courses:</strong> Intro to Digital and Microcontroller Systems
                                Lecture and Lab, Digital Systems Design Lecture and Lab, Computational Problem
                                Solving 1 Lecture and Lab, DC/AC Circuits Lecture and Lab, Electronic Devices
                                Lecture and Lab, Computational Problem Solving 2, Fundamentals of Audio Engineering,
                                Networking Technologies.
                            </li>
                            <li>
                                <strong>Extracurriculars:</strong> Firmware Team in Electric Vehicle Team.
                            </li>
                        </ul>
                    </p>

                    <h2 className={'title-skills'}>
                        <AnimatedLetters
                            letterClass={letterClass}
                            //takes string splits each character into a separate char then adds it to the array
                            strArray={strSkills.split("")}
                            idx={15}
                        />
                    </h2>

                    <p className={'text-about'}>
                        <ul>
                            <li>
                                <strong>Languages:</strong> C, C++, Cmake, Python, VHDL.
                            </li>
                            <li>
                                <strong>Software:</strong> Altium Designer, Git, Github, FreeRTOS, CAN and CANopen,
                                SPI, UART, I2C, ADC, PCANView, STM32 Cube programmer/IDE/MX, CLion, Arduino IDE,
                                Code Composer Studio, Visual Studios Code/Community, Adobe Software, Microsoft
                                Office 365, Google docs/sheets/slides, Pro Tools 12, Audacity, Saleae Logic Pro.
                            </li>
                            <li>
                                <strong>Embedded:</strong> FreeRTOS, CANopen, SPI, UART, I2C, PCANView,
                                Saleae Logic Analyzer, STM32 Nucleo, Arduino Uno R3, TI MSP432,
                                Raspberry Pi 4, ESP32-S3.
                            </li>
                            <li>
                                <strong>Hardware:</strong> Saleae Logic Analyzer, Quartus II, ModelSim,
                                Multisim, Altera Cyclone II FPGA, Breadboards, Focusrite Scarlett 2i2.
                            </li>
                            <li>
                                <strong>Lab Equipment:</strong> Tektronix Oscilloscope, Digital Multimeter, Curve
                                Tracer, and Function Generator, Programmable DC Power Supplies, Soldering Iron.
                            </li>
                        </ul>
                    </p>

                    <h2 className={'title-personal'}>
                        <AnimatedLetters
                            letterClass={letterClass}
                            //takes string splits each character into a separate char then adds it to the array
                            strArray={strPersonal.split("")}
                            idx={15}
                        />
                    </h2>

                    <p className={'text-about'}>
                        <ul>
                            <li>Born in Massachusetts on November 2nd, 2002.</li>
                            <li>From 2002-2010 lived in Santo Domingo, Dominican Republic.</li>
                            <li>Moved to Massachusetts in 2010.</li>
                            <li>Graduated from Malden Catholic High School in 2021.</li>
                            <li>Started atteding Rochester Institute of Technology in 2021.</li>
                        </ul>
                    </p>

                    <h2 className={'title-hobbies'}>
                        <AnimatedLetters
                            letterClass={letterClass}
                            //takes string splits each character into a separate char then adds it to the array
                            strArray={strHobbies.split("")}
                            idx={15}
                        />
                    </h2>

                    <p className={'text-about'}>
                        <ul>
                            <li>Music:
                                <br/>Played guitar from 2017 to present.
                                <br/>Take lessons at All that Music Academy in Stoneham, MA.
                            </li>
                            <li>Movies and TV
                                <br/>Favorite Movie: Whiplash by Damien Chazelle.
                                <br/>Favorite Show: Avatar the Last Airbender.
                            </li>
                            <li>Programming and problem solving
                                <br/>I enjoy being challenged and having to learn new things to grow because it
                                <br/>keeps me engaged and motivated.
                            </li>
                        </ul>
                    </p>

                </div>

                <div className={'stage-cube-cont'}>

                    <div className={'cubespinner'}>

                        <div className={'img-git'}>
                            <FontAwesomeIcon icon={faGitAlt} color={'#EC4D28'}/>
                        </div>

                        <div className={'img-altium'}>
                            <img src={altiumSvg} alt={"Altium Icon"}/>
                        </div>

                        <div className={'img-cpp'}>
                            <img src={cppSvg} alt={"CPP Icon"}/>
                        </div>

                        <div className={'img-c'}>
                            <img src={cSvg} alt={"C Icon"}/>
                        </div>

                        <div className={'img-python'}>
                            <img src={pythonSvg} alt={"Python Icon"}/>
                        </div>

                        <div className={'img-microsoft365'}>
                            <img src={ms365Svg} alt={"Microsoft Icon"}/>
                        </div>

                    </div>
                </div>
                <div className={'img-personal-container'}/>
                <div className={'img-flag-container'}/>
                <div className={'img-self-container'}/>
                <div className={'img-hobbies-container'}/>
                <ul className={'text-credit'}>Photo by @kendall_dirks on Instagram</ul>
            </div>
            <Loader type={"pacman"} active/>
        </>
    )
}

export default About