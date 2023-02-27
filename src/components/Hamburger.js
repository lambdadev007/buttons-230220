import { useEffect, useState } from "react";
import "../style/Hamburger.scss";

const Hamburger = () => {
    const [checked, setChecked] = useState(false);
    const [flag, setFlag] = useState(true);
    useEffect(()=> {
        document.querySelector('body').addEventListener('click', () => {
          setFlag(false);
        });
    },[])
    useEffect(()=> {        
            const temp = setInterval(()=> { 
                if (flag) setChecked(!checked);
            }, 3000);  
            if(!flag) clearInterval(temp);
            return () => { clearInterval(temp); }
    }, [flag, checked])
    const handleChange = () => {
        setChecked(!checked);
    }
    return (
    <>
        <label className="toggle" style={{display:'inline-block'}}>
            <input type="checkbox" 
                checked={checked} 
                onChange = {handleChange}
            />
            <div style={{display : "inline-block"}}>
                <div>
                    <span></span>
                    <span></span>
                </div>
                <svg>
                    <use xlinkHref="#path" />
                </svg>
                <svg>
                    <use xlinkHref="#path" />
                </svg>
            </div>
        </label>    
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="path">
                <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
            </symbol>
        </svg>
    </>
    )
}

export default Hamburger;