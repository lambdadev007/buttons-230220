import {  useEffect, useRef } from "react";
import style from "../style/CSSHoverLightCard.module.css";

const CSSHoverLightCard = () => {
    const cardRef = useRef();
    useEffect(()=>{
        const UPDATE = ({x,y}) => {
            if(cardRef.current) {
                const BOUNDS = cardRef.current.getBoundingClientRect();
                const posX = x - BOUNDS.x;
                const posY = y - BOUNDS.y
                const ratioX = posX / BOUNDS.width
                const ratioY = posY / BOUNDS.height
                cardRef.current.style.setProperty('--ratio-x', ratioX)
                cardRef.current.style.setProperty('--ratio-y', ratioY)
            }
        }
        document.body.addEventListener('pointermove', UPDATE);
    }, [])
    return (
        <div style={{display:'inline-block', minHeight:'100vh',perspective:'100vmin'}}>
            <div className={style["card"]} ref = {cardRef}>
                <img src="https://assets.codepen.io/605876/headshot--square.jpeg" alt="" />
            </div>
        </div>
    )
}

export default CSSHoverLightCard;