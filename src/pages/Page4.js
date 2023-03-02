import style from "../style/Page4.module.css";
import { GUI } from "https://cdn.skypack.dev/dat.gui@0.7.9"
import {useEffect, useState} from "react";

const OPTIONS1 = {
    text: 'Circular text with CSS Trigonometric functions • ',
    size: 1,
    spacing: 1,
  }
const CTRL = new GUI()  

CTRL.add(OPTIONS1, 'text').name('Text')
CTRL.add(OPTIONS1, 'size', 1, 2, 0.1).name('Font size (rem)')
CTRL.add(OPTIONS1, 'spacing', 1, 2, 0.1).name('Side (ch)')

const Page4 = () => {
    const [OPTIONS, setOPTIONS] = useState({...OPTIONS1});
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
    }, [OPTIONS])

    return (
        <div className={style['Page4-container']}>
            <aside>
                CSS Trigonometric functions aren't supported in this browser :
            </aside>
            <section>
                <span className={style["text-ring"]}
                    style={{'--total': OPTIONS.text.split("").length,
                            '--character-width': OPTIONS.spacing,
                            '--font-size' : OPTIONS.size
                        }}
                >
                    <span aria-hidden="true">
                        {    OPTIONS.text.split("").map((char, index)=>(
                                <span key={`${index}`} style={{'--index' : `${index}`}}>
                                    { char }
                                </span>
                            ))
                        }
                    </span>
                    <span className={style['sr-only']}>
                        { OPTIONS.text}
                    </span>
                </span>
            </section>
        </div>
    )
}

export default Page4