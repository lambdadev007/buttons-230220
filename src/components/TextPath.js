import {  useEffect, useState} from "react";
import style from "../style/TextPath.module.css";
import { GUI } from "https://cdn.skypack.dev/dat.gui@0.7.9"

const OPTIONS1 = {
    text: 'Your text here! •&nbsp;',
    size: 12,
    radius: 20,
    showPath: true,
    spread: false,
    inside: false,
}     
const CTRL = new GUI()  
CTRL.add(OPTIONS1, 'text').name('Text')
CTRL.add(OPTIONS1, 'size', 6, 16, 1).name('Font size')
CTRL.add(OPTIONS1, 'radius', 20, 50, 1).name('Radius')
CTRL.add(OPTIONS1, 'showPath').name('Show path')
CTRL.add(OPTIONS1, 'spread').name('Spread text')
CTRL.add(OPTIONS1, 'inside').name('Inside')
const TextPath = () => {
    const [OPTIONS, setOPTIONS] = useState({...OPTIONS1});
    const VIEWBOX = 100;
    const [PATH, setPATH] = useState("");
    useEffect(()=>{
        for (let i = 0; i< CTRL.__controllers.length; i++){
            let value = CTRL.__controllers[i];
            let { property } = value;
            value.onChange((v)=>{
                let temp=OPTIONS;
                temp[property] = v;
                setOPTIONS({...temp})
            })
        }
    }, [])
    
    useEffect(()=>{ 
        console.log("ddd", OPTIONS)
        const PATH1 = `M ${VIEWBOX * 0.5 - OPTIONS.radius}, ${VIEWBOX * 0.5}
        a ${OPTIONS.radius},${OPTIONS.radius} 0 1,${OPTIONS.inside ? 0 : 1} ${
        OPTIONS.radius * 2
      },0   ${OPTIONS.radius},${OPTIONS.radius} 0 1,${OPTIONS.inside ? 0 : 1} -${
        OPTIONS.radius * 2  },0  `;     
        setPATH(PATH1) 
    }, [OPTIONS])
    return (
        <div className={style['text-path-container']}>
            <section>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path id="circlePath-textpath" 
                    d={PATH}
                    style={{ '--show' : OPTIONS.showPath ? 1 : 0}}
                    fill="none" strokeWidth="4" stroke="hsl(0 100% 50% / 0.5)" />
                <text id="text-textpath" fontFamily="monospace" 
                    fontSize={`${OPTIONS.size}`} fontWeight="bold" fill="var(--text-1)">
                    <textPath id="textPath-textpath" 
                        textLength={OPTIONS.spread ? Math.floor(Math.PI * 2 * OPTIONS.radius) : null}
                        href="#circlePath-textpath">
                        { OPTIONS.text }
                    </textPath>
                </text>
                </svg>
            </section>
        </div>
    )
}

export default TextPath;