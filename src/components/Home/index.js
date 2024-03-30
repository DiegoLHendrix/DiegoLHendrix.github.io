import {Link} from "react-router-dom"
import './index.scss'
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameStr = " Diego Lopez"//String of message
    const nameArray = nameStr.split("")//String is split then added to an array
    const jobStr = "Computer Engineer"
    const jobArray = jobStr.split("")

    useEffect(() => {
         setTimeout(() => {
             return setLetterClass('text-animate-hover')
            }, 4000)
    }, []);

    return (
        <>
        <div className={"container home-page"}>
            <div className={"text-zone"}>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span>

                    <AnimatedLetters letterClass={letterClass}//Array is printed and animated
                                     strArray={nameArray}
                                     idx={15}/>
                    <br/>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={15}/>
                </h1>
                <h2>Embedded Software Engineer</h2>
                <Link to={"/About"} className={'about-button'}>ABOUT ME</Link>
                <Link to={"/Contact"} className={'contact-button'}>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
            <Loader type={"pacman"}  active/>
        </>
    )
}

export default Home