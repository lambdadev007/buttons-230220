import { useEffect, useState } from "react";
import style from "../style/CharBar.module.scss";
import classNames from "classnames";

const ButtonGrid = () => {
    const [isActive, setIsActive] = useState(false);
    const [isDefault, setIsDefault] = useState(false);
    const onclick = (e) => {
        e.preventDefault();
        if(isActive) {
            setIsDefault(true);
            setTimeout(()=>{
                setIsDefault(false);
                setIsActive(false);
            }, 1000);
        } else setIsActive(true);        
    }
    return (
        <div style={{display:'inline-block'}}>
            <nav className={classNames(style["chatbar"], isActive?style['active']:'', isDefault?style['default']:'')}>
                <div className={style["control"]}>
                    <a onClick={(e) => onclick(e)}>
                        <svg>
                            <use xlinkHref="#plus-charbar" />
                        </svg>
                    </a>
                    <div className={style["text"]}>
                        <input type="text" placeholder="Message" />
                    </div>
                    <ul className={style["list"]}>
                        <li>
                            <a href="">
                                <svg>
                                    <use xlinkHref="#video-charbar" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg>
                                    <use xlinkHref="#photo-charbar" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg>
                                    <use xlinkHref="#image-charbar" /> 
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="video-charbar" fill="none" stroke="currentColor">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="photo-charbar" fill="none" stroke="currentColor">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="image-charbar" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus-charbar" fill="none" stroke="currentColor">
                    <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{transform:"translate(0.5px 0.5px)"}}>
                        <line strokeMiterlimit="10" x1="12" y1="7" x2="12" y2="17"></line>
                        <line strokeMiterlimit="10" x1="17" y1="12" x2="7" y2="12"></line>
                    </g>
                </symbol>
            </svg>    
        </div>
    )
}

export default ButtonGrid;