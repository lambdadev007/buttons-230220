import {  useEffect } from "react";
import style from "../style/RingText.module.css";

const RingText = () => {
    const text = 'Circular text in React •&nbsp;';
    const CHARS = text.split('');
    const INNER_ANGLE = 360 / CHARS.length
    const side = 1.1;

    useEffect(()=>{
    }, [])
    return (
        <div className={style['ring-text-container']}>
            <span
            className={style["text-ring"]}
            style={{
                '--total': CHARS.length,
                '--radius': side / Math.sin(INNER_ANGLE / (180 / Math.PI))
            }}
            >
            {CHARS.map((char, index) => (
                <span style={{'--index': index }} key={`${index}`}>
                {char}
                </span>
            ))}
            </span>
        </div>
    )
}

export default RingText;