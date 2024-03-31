import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {useRef, useState} from "react";

const Test = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    const strTest = "Test";

    return(
        <>
            <div className={'container text-page'}>
                <div className={'text-zone'}>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={strTest.split("")}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Test