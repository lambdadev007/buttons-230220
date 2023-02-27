import { useEffect, useState } from "react";
import style from "../style/ButtonArrows.module.scss";
import classNames from "classnames";

const ButtonArrows = () => {
    const [animateLeft, setAnimateLeft] = useState(false);
    const [animate, setAnimate] = useState(false);

    const onclick = (e) => {
        e.preventDefault();
        if (!animate) { 
            setAnimate(true); 
            setTimeout(() => setAnimate(false), 1600);
        }
    }
    const onclickLeft = (e) => {
        e.preventDefault();
        if (!animateLeft) { 
            setAnimateLeft(true); 
            setTimeout(() => setAnimateLeft(false), 1600);
        }
    }
    return (
        <div style={{display:'inline-block'}}>
            <div className={style['demo']}>
                <a href="" className={classNames(style['arrow'], style['left'], animateLeft?style['animate']:"")} onClick={(e)=>onclickLeft(e)}>
                    <i></i>
                    <svg>
                        <use xlinkHref="#circle" />
                    </svg>
                </a>

                <a href="" className={classNames(style['arrow'], animate?style['animate']:"")} onClick={(e)=>onclick(e)}>
                    <i></i>
                    <svg>
                        <use xlinkHref="#circle" />
                    </svg>
                </a>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle" fill="none" stroke="currentColor">
                    <circle r="20" cy="22" cx="22" id="test" />
                </symbol>
            </svg>
        </div>
    )
}

export default ButtonArrows;