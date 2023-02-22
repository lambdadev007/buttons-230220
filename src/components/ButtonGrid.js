import { useEffect, useState } from "react";
import "../style/ButtonGrid.scss";
import classNames from "classnames";

const ButtonGrid = ({ gridTitle, listTitle }) => {
    const [isActive, setIsActive] = useState(false);
    const toggle = () => {
        setIsActive(!isActive);
    }
    return (
        <button className={classNames("grid-list" ,(gridTitle || listTitle) ? "" : "without-text", "animation", isActive?"active":"" )}
            onClick={toggle}
        >
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