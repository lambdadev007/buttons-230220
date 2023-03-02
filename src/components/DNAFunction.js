import { useEffect, useState } from "react";
import style from "../style/DNAFunction.css";
import classNames from "classnames";

const DNAFunction = () => {    
    // Set random colors
    const COLORS = ['hsl(44, 98%, 60%)', 'hsl(197, 50%, 44%)', 'hsl(300, 100%, 100%)', 'hsl(331, 76%, 50%)']

    return (
        <div className='dna-container'>
            <div className="dna" style={{"--total": 13}}>
            { [0,1,2,3,4,5,6,7,8,9,10,11,12].map((v,i)=>(
                <div className="strand" 
                    style={{"--index": `${i+1}`, '--delay':`calc((${Math.sin(((Math.PI / 180) * 45) * ((i + 1) / 13))} * var(--speed)) * -1s)` }} 
                    key={`${i}`}>
                    <div className="strand__node"
                        style={{'--bg': COLORS[Math.floor(Math.random() * COLORS.length)]}}
                    ></div>
                    <div className="strand__node"
                        style={{'--bg': COLORS[Math.floor(Math.random() * COLORS.length)]}}
                    ></div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default DNAFunction;