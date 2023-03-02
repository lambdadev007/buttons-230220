import style from "../style/Page5.module.css";
import { GUI } from "https://cdn.skypack.dev/dat.gui@0.7.9"
import {useEffect, useState} from "react";


const Page5 = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        setLoaded(true);
    }, [])
    const onclick = () => {
        console.log("button clicked")
        setLoaded(false);
        requestAnimationFrame(()=>{
            setLoaded(true);
        })
    }
    return (
        <div className={style['intro-loader']} onClick={onclick}>
        { loaded ? (<>
            <main>
                <h1>Hello, World!</h1>
                <p>Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quae beatae sunt laborum id nesciunt deserunt odio, voluptatem nostrum ipsa itaque alias hic et tempora quaerat doloribus aliquid quo ullam error.</p>
                <p>Autem libero vitae sunt odit, beatae consequatur deleniti, ratione. Omnis, qui aperiam cum eos quas corporis sunt necessitatibus maiores molestias facere esse totam ipsa ea accusantium ad. Iste cumque, iure.</p>
                <p>Provident consequuntur itaque dolores ipsa, sunt, voluptates molestiae aliquid exercitationem, ratione vel id magni? Consectetur beatae, autem quas culpa numquam corrupti. Itaque vel quasi iusto excepturi voluptatum, at, dicta quod.</p>
                <p>Earum necessitatibus reprehenderit praesentium enim nemo sapiente voluptas architecto ratione beatae quia suscipit iste vitae illo porro harum iusto quae sint explicabo alias sed facilis magnam eos minus doloribus, iure.</p>
                <p>Est, blanditiis. Expedita reiciendis modi vel amet quod officiis perspiciatis dolore sequi necessitatibus similique fugiat aut facilis maxime non dignissimos est vitae blanditiis quae eos ipsam, numquam molestiae ex cumque.</p>
            </main>
            <div className={style["progress"]} aria-hidden="true"></div></>
        ) : null}
        </div>
    )
}

export default Page5