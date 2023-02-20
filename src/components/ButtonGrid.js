import { useEffect } from "react";
import "../style/style.scss";
import classNames from "classnames";

const ButtonGrid = ({ gridTitle, listTitle }) => {
    useEffect(()=> {
      document.querySelectorAll('.grid-list').forEach(button => button.addEventListener('click', toggle));
  
      function toggle() {
          let btn = this;
          btn.classList.add('animation');
          btn.classList.toggle('active');
          let newElem = btn.cloneNode(true);
          btn.parentNode.replaceChild(newElem, btn);
          newElem.addEventListener('click', toggle);
      }
  
    },[])
    return (
        <button className={classNames("grid-list" ,(gridTitle || listTitle) ? "" : "without-text")}>
            <div className="icon">
                <div className="dots">
                    <i></i><i></i><i></i><i></i>
                </div>
                <div className="lines">
                    <i></i><i></i><i></i><i></i>
                </div>
            </div>
            {(gridTitle || listTitle) ? (
                <div className="text">
                    <span>{ gridTitle }</span>
                    <span>{ listTitle }</span>
                </div>) : null
            }
        </button>
    )
}

export default ButtonGrid;