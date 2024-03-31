import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    const strContact = "Contact me";

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const url = "https://formspree.io/f/xzbnjjzp";

        try {
            await fetch(url, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });
            // Optionally, you can show a success message or redirect the user to a thank you page
            console.log("Email sent successfully");
        } catch (error) {
            // Optionally, you can show an error message to the user
            console.error("Error sending email:", error);
        }
    };

    return (
        <>
            <div className={'container contact-page'}>
                <div className={'text-zone'}>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={strContact.split("")}
                            idx={15}
                        />
                    </h1>
                    <p style={{ fontSize: '20px' }}>
                        I am a Computer Engineering Technology major with a passion for designing and integrating
                        firmware, software, and embedded systems, as well as working with electrical equipment and PCB
                        design. I am actively seeking an internship opportunity where I can leverage my skills in these
                        areas and further challenge myself. Available May 2024 to December 2024.
                    </p>
                    <div className={'contact-form'}>
                        <form ref={form} onSubmit={handleSubmit}>
                            <ul>
                                <li className={'half'}>
                                    <input type={"text"} name={"name"} placeholder={'Name'} required className="custom-input"/>
                                </li>
                                <li className={'half'}>
                                    <input type={"email"} name={"email"} placeholder={'Email'} required className="custom-input"/>
                                </li>
                                <li>
                                    <input placeholder={'Subject'} type={"text"} name={"subject"} required className="custom-input"/>
                                </li>
                                <li>
                                    <textarea placeholder={'Message'} name={"message"} className="custom-input"></textarea>
                                </li>
                                <li>
                                    <input type={"submit"} className={'flat-button'} value={"SEND"}/>
                                </li>
                            </ul>
                        </form>
                    </div>

                    <div className={'contact-info'}>
                        <ul>
                            Contact me here as well!
                            <br/>
                            <a target="_blank"//LinkedIn icon and link
                               rel='noreferrer'
                               href='https://www.linkedin.com/in/diego-lopez-693a46234/'>
                                <FontAwesomeIcon icon={faLinkedin} color="#ffff" style={{marginRight: '50px'}}/>
                            </a>
                            <a target="_blank"
                               rel='noreferrer'
                               href='https://github.com/DiegoLHendrix'>
                                <FontAwesomeIcon icon={faGithub} color="#ffff" style={{marginRight: '50px'}}/>
                            </a>
                            <a target="_blank"
                               rel="noreferrer"
                               href="https://www.instagram.com/diegolhendrix/">
                                <FontAwesomeIcon icon={faInstagram} color="#ffff" style={{marginRight: "50px"}}/>
                            </a>
                        </ul>
                    </div>

                </div>
            </div>
            <Loader type={"pacman"} active/>
        </>
    );
};

export default Contact;
