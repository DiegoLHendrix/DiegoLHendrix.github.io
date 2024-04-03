import './index.scss'
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import mspSpeaker from '../../assets/videos/hw6.mp4'

const Microcontrollers = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const strMicrocontrollers = "Microcontroller Systems";
    const strMSP432 = "TI MSP432"
    const strTimerA = "TimerA"
    const strSPI = "SPI"
    const strBLE = "Bluetooth and UART"
    const strIR = "IR Reflectance Sensors"
    const strFinal = "Complex Security System"

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
                        idx={13}
                    />
                </h1>
                <p className={'mcu-intro'}>
                    This course delves into the typical structures and applications of microcontroller systems, placing
                    emphasis on hardware, programming, input/output methods, typical peripherals, and interfacing
                    including communication protocols such as UART, I2C, and SPI, alongside Timers, ADC, and
                    micro-to-micro communications. It covers interrupt handling, small system design, and applications
                    using high-level programming languages. Additionally, it introduces microprocessor architecture and
                    assembly programming to establish a foundation for more advanced digital designs. The laboratory
                    exercises are crafted to illustrate concepts, strengthen analysis and design skills, and foster
                    expertise in instrumentation techniques relevant to the lecture topics.
                </p>

                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={strMSP432.split("")}
                        idx={13}
                    />
                </h1>

                <h2>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={strTimerA.split("")}
                        idx={13}
                    />
                </h2>

                <p className={'mcu-text'}>
                    <p className={'mcu-text'}>
                        <strong>Objective:</strong><br/>
                        This lab entails a comprehensive exploration of TimerA module
                        functionalities within the MSP432 microcontroller, focusing on generating PWM signals and
                        measuring
                        event durations. The primary objective is to employ a servo motor and an ultrasonic sensing
                        module
                        to enable autonomous maneuvering for a robot. This involves sweeping an ultrasonic sensor over a
                        180-degree arc to measure distances to nearby objects and autonomously avoiding
                        collisions.<br/><br/>

                        <strong>Problem 1: Group Interests Sharing</strong><br/>
                        In this problem, teams are tasked with sharing their personal interests with new group
                        members, fostering collaboration and camaraderie. They are required to add any new interests to
                        the existing list, enhancing the collective understanding within the group.<br/><br/>

                        <strong>Problem 2: Musical Scale Generation</strong><br/>
                        Teams are challenged to compute TimerA0 CCR1 values necessary for producing square wave outputs
                        corresponding to 25 notes on the musical scale. A program is to be developed for calculating
                        these values, which will then be printed using printf(). Additionally, constants for these
                        results and time delay constants for note duration are to be defined.<br/><br/>

                        <strong>Problem 3: Musical Note Playback</strong><br/>
                        This problem involves initializing TimerA to generate square waves and implementing a playNote()
                        function to manage note playback. The function configures TimerA registers based on note
                        duration and delay constants, facilitating sequential playback of different notes with specified
                        pauses between them.<br/><br/>

                        <strong>Additional Instructions:</strong><br/>
                        <li>Utilize the MSP432 speaker to output waveform signals.</li>
                        <li>Prohibit the use of "Mary Had a Little Lamb" for the assignment, encouraging exploration of
                            alternative musical compositions.
                        </li>
                        <li>Record a video demonstration showcasing the functioning speaker setup and submit it
                            alongside the homework.
                        </li>
                        <br/>

                        <strong>Conclusion:</strong><br/>
                        Through the completion of these tasks, teams will deepen their understanding of TimerA module
                        functionalities, PWM signal generation, and musical note playback. This hands-on experience
                        contributes to their proficiency in microcontroller systems design and implementation, fostering
                        their growth in embedded systems development.
                    </p>
                </p>

                <h2>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={strSPI.split("")}
                        idx={13}
                    />
                </h2>

                <p className={'mcu-text'}>
                    <strong>Objective:</strong><br/>
                    In this lab the focus is on exploring the capabilities of the TimerA module within the MSP432
                    microcontroller, particularly in generating PWM signals and measuring event durations. The primary
                    objective involves utilizing a servo motor and an ultrasonic sensing module to achieve autonomous
                    maneuvering for a robot, including sweeping an ultrasonic sensor over a 180-degree arc to measure
                    distances to nearby objects and autonomously avoiding collisions.<br/><br/>

                    <strong>Ultrasonic Sensor:</strong><br/>
                    The HC-SR04 ultrasonic sensor employs sonar technology to determine object distances by emitting
                    sound pulses and measuring the time taken for echoes to return. Offering reliable non-contact range
                    detection with high precision, it operates within a range of 2 cm to 400 cm or 1" to 13 feet. The
                    sensor's operation involves triggering ultrasonic bursts, listening for echoes, and calculating
                    distances based on echo return times.<br/><br/>

                    <strong>Servo Motor:</strong><br/>
                    Controlled by pulse width modulation (PWM) signals, a servo motor's rotation angle is determined by
                    the duration of the input pulse. The servo motor utilized in this lab requires a 20 ms period, with
                    pulse widths ranging from 1 ms to 2 ms. Although ideally, a 1 ms pulse width corresponds to a -90
                    degree rotation, and a 2 ms pulse width to a 90 degree rotation, calibration may be required with
                    inexpensive servos.<br/><br/>

                    <strong>Prior Preparation:</strong><br/>
                    Before undertaking the lab assignment, it's advisable to review research related to servos and SPI,
                    as they serve as a foundational reference for this project.<br/><br/>

                    <strong>Conclusion:</strong><br/>
                    In the end, I gained valuable knowledge and hands-on experience in PWM signal generation, ultrasonic
                    sensing, and servo motor control. This has significantly enhanced my skill set in embedded systems
                    design and implementation.
                </p>

                <h2>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={strBLE.split("")}
                        idx={13}
                    />
                </h2>

                <p className={'mcu-text'}>
                    <strong>Educational Objective:</strong><br/>
                    The primary objective of this lab was to explore both the OLED LCD and Bluetooth modules on the
                    TI-RSLK. This lab heavily relied on provided library functions due to the complexity of these
                    modules. Upon completing this project, I gained proficiency in integrating Bluetooth technology to
                    receive data and leveraging it to control the movement of the robot. Additionally, I acquired skills
                    in dynamically displaying this received data on the OLED LCD screen through the UART communication
                    protocol.<br/><br/>

                    <strong>Background:</strong><br/><br/>

                    <strong>OLED LCD:</strong><br/>
                    The display module on the TI-RSLK is the SSD1306 128 x 64 dot matrix OLED graphical display. It
                    operates via specific pins on the MSP432 Launchpad, connected to the SSD1306_Init() function to
                    configure the SPI for OLED LCD usage. Understanding the functionality of pins, such as SPI USC3SIMO,
                    GPIO, and SPI UCA3CLK, is crucial. Notably, the OLED display requires battery power from the TI-RSLK
                    MAX robot to operate.<br/><br/>

                    <strong>Bluetooth Low Energy (BLE):</strong><br/>
                    Bluetooth Low Energy (BLE) facilitates wireless data transmission between devices in close
                    proximity. The TI-RSLK employs the CC2650 Module Booster Pack for BLE communication, connecting to
                    the MSP432 via UART1. The SNP-SAP system simplifies BLE communication, with low-level radio details
                    managed by the CC2650 and high-level abstractions handled by the MSP432.<br/><br/>

                    <strong>Pre-Laboratory Tasks:</strong><br/>
                    Thoroughly comprehend the requirements and background information.
                    Create a new project in Code Composer named Lab6_OLED and include necessary files.
                    Review the SSD1306_Init() function in SSD1306.c for SPI configuration details.
                    Implement the commandwrite() and datawrite() functions in SSD1306.c as per lecture notes.
                    Verify the correctness of functions by compiling and running the Lab6_OLEDmain code.<br/><br/>

                    <strong>Conclusion:</strong><br/>
                    Through completing this lab assignment, I gained practical experience in utilizing OLED LCD and
                    Bluetooth modules on the TI-RSLK platform. This hands-on exploration enhanced my understanding of
                    microcontroller systems and reinforced concepts of SPI communication and Bluetooth protocol,
                    contributing to my proficiency in embedded systems design and implementation.
                </p>

                <h2>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={strIR.split("")}
                        idx={13}
                    />
                </h2>

                <p className={'mcu-text'}>
                    <strong>Educational Objective:</strong><br/>
                    The educational objective of this lab was to investigate the use of IR sensing
                    with the QTRX and the MSP432. This objective was achieved by creating functions that provided IR
                    reflectance sensor feedback. These functions returned position information to a software state
                    machine, which controlled the PWM outputs and maintained a path on a given line.<br/><br/>

                    <strong>Background:</strong><br/>
                    The ultimate goal of this lab was to design a sensor system that measured the position of the robot
                    relative to a line, driving the robot forward and correcting for any deviation. A black line on
                    white poster board was used for this purpose.<br/><br/>

                    The QTRX IR reflectance sensors, assembled on the bottom of the robot, provided discrete values
                    where 1 represented a black reading and 0 represented a white reading. The binary sensor response of
                    0b00011000 indicated that the line was centered under the two middle sensors, while all zeros
                    (0b00000000) indicated that the robot was completely off the black line. These sensors were utilized
                    to determine a positional value and make decisions to keep the robot centered on the black
                    line.<br/><br/>

                    The 8-channel reflectance sensor was interfaced to ports 5, 7, and 9 on the TI-RSLK chassis board,
                    with Sensor 0 (P7.0) on the right and Sensor 7 (P7.7) on the left.<br/><br/>

                    <strong>Conclusion:</strong><br/>
                    Through the completion of this lab, I gained practical experience in utilizing IR reflectance
                    sensors with the MSP432 microcontroller. This hands-on exploration enhanced my understanding of
                    sensor systems and their application in controlling robot movement.
                </p>

                <h2>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={strFinal.split("")}
                        idx={13}
                    />
                </h2>

                <p className={'mcu-text'}>
                    <strong>Objective:</strong><br/>
                    The goal of this project was to use the skills and knowledge about the MSP432 and its capabilities
                    we gained throughout the semester. This goal was achieved by creating our own independent project
                    based on our own interests using at least 5 components from the course. My partner, Mike Herr, and I
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

            <div className={'vid-container'}>
                <video className={'vid-hw6'}
                       src={mspSpeaker} controls
                       style={{width: '50%', height: 'auto'}}/>
            </div>

        </div>
    )
}

export default Microcontrollers