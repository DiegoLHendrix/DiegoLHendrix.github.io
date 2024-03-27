import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef(); // Add parentheses here

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_c671z6z', 'template_mgkiiej', form.current, 'TcNEJnkDzOmLIb3kg')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className={'container contact-page'}>
                <div className={'text-zone'}>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am seeking opportunities in embedded systems engineering, firmware engineering, and/or electrical engineering. Please feel free to reach out to me with any inquiries via the provided contact methods.
                    </p>
                    <div className={'contact-form'}>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className={'half'}>
                                    <input type={"text"} name={"name"} placeholder={'Name'} required/>
                                </li>
                                <li className={'half'}>
                                    <input type={"email"} name={"email"} placeholder={'Email'} required/>
                                </li>
                                <li>
                                    <input placeholder={'Subject'} type={"text"} name={"subject"} required/>
                                </li>
                                <li>
                                    <textarea placeholder={'Message'} name={"message"}></textarea>
                                </li>
                                <li>
                                    <input type={"submit"} className={'flat-button'} value={"SEND"} />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type={"pacman"} />
        </>
    )
}

export default Contact;