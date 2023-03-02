import {  useEffect, useRef } from "react";
import style from "../style/RotateText.module.css";

const RotateText = () => {
    const canTrig = CSS.supports('(top: calc(sin(1) * 1px))')
    const OPTIONS = {
      SPACING: 1,
      SIZE: 1,
      TEXT: 'Made by Jhey with CSS Trig functions • ',
    }
    const text = OPTIONS.TEXT;
    const chars = text.split('');

    useEffect(()=>{
    }, [])
    return (
        <div className={style['rotate-text-container']}>
            <section>
                <h1 className={style["text-ring"]}
                    style={{'--char-count':`${chars.length}`, '--font-size':OPTIONS.SIZE, 
                        '--character-width':OPTIONS.SPACING, '--character-width':OPTIONS.SPACING,
                        '--radius': canTrig?'calc((var(--character-width)/sin(var(--inner-angle))) * -1ch' : `calc((${OPTIONS.SPACING} / ${Math.sin(360/chars.length / (180/Math.PI))}) * -1ch)` }}
                >
                { chars.map((char, index) => (
                    <span aria-hidden='true'   key={`${index}`}
                        className={style['char']} 
                        style={{'--char-index':`${index}`}}>
                        { char }
                    </span>
                ))}
                </h1>
            </section>
        </div>
    )
}

export default RotateText;