import {  useEffect, useRef } from "react";
import style from "../style/MulticardSpotlight.module.css";

const MulticardSpotlight = () => {
    const cardRef1 = useRef();
    const cardRef2= useRef();
    useEffect(()=>{
        document.body.addEventListener('pointermove', UPDATE);
        cardRef1.current.addEventListener('pointerenter', ADD(cardRef1.current));
        cardRef2.current.addEventListener('pointerenter', ADD(cardRef2.current));
    }, [])
    const UPDATE = CARD => ({x,y}) => {
        const BOUNDS = CARD.getBoundingClientRect();
        const posX = x - BOUNDS.x;
        const posY = y - BOUNDS.y
        const ratioX = posX / BOUNDS.width
        const ratioY = posY / BOUNDS.height
        CARD.style.setProperty('--ratio-x', ratioX)
        CARD.style.setProperty('--ratio-y', ratioY)
    }
    const REMOVE = CARD => {
      CARD.removeEventListener('pointermove', CARD.__MOVE)
      CARD.removeEventListener('pointerleave', CARD.__REMOVE)
    }
    
    const ADD = CARD => {
      CARD.__MOVE = UPDATE(CARD)
      CARD.__REMOVE = REMOVE(CARD)
      CARD.addEventListener('pointermove', CARD.__MOVE)
      CARD.addEventListener('pointerleave', CARD.__REMOVE)
    }

    return (
        <div className={style['multicard-container']}>
            <div className={style["card"]} ref = {cardRef1}>
                <img src="https://assets.codepen.io/605876/headshot--square.jpeg" alt="" />
            </div>
            <div className={style["card"]} ref = {cardRef2}>
                <img src="https://assets.codepen.io/605876/headshot--square.jpeg" alt="" />
            </div>
        </div>
    )
}

export default MulticardSpotlight;