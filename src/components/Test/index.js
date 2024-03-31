import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";

const Test = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const strTest = "Test";

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    }, []);

    return (
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
    );
};

export default Test;
