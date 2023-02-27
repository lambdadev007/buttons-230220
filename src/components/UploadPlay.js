import '../style/UploadPlay.scss';


const UploadPlay = () => {
    
    return (
    <div style={{display:'inline-style'}}>
    <div className="upload">
        <div className="text">
            <strong><span>Uploading</span> 3 files</strong>
            <div>
                <small>%</small>
                <div>
                    <small>
                        <span data-seconds>0</span> seconds left
                    </small>
                    <small>Paused</small>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="" className="btn play">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4.09437962,6 L13,6 C14,5.89116285 14.5,5.39116285 14.5,4.5 C14.5,3.60883715 14,3.10883715 13,3 L12,3 L4.09437962,3 L3,3 C2,3.10728568 1.5,3.60728568 1.5,4.5 C1.5,5.39271432 2,5.89271432 3,6 L4.09437962,6 Z"></path>
                        </svg>
                        <svg viewBox="0 0 16 16" fill="currentColor">
                            <path d="M4.09437962,6 L13,6 C14,5.89116285 14.5,5.39116285 14.5,4.5 C14.5,3.60883715 14,3.10883715 13,3 L12,3 L4.09437962,3 L3,3 C2,3.10728568 1.5,3.60728568 1.5,4.5 C1.5,5.39271432 2,5.89271432 3,6 L4.09437962,6 Z"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="" className="btn cancel"></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                            <polygon points="7.4,10 6,8.6 3.3,11.3 0,8 0,16 8,16 4.7,12.7 "></polygon>
                            <polygon points="11.3,3.3 8.6,6 10,7.4 12.7,4.7 16,8 16,0 8,0 "></polygon>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="" className="dots">
                        <svg viewBox="0 0 16 16" fill="currentColor">
                            <circle cx="8" cy="8" r="2"></circle>
                            <circle cx="2" cy="8" r="2"></circle>
                            <circle cx="14" cy="8" r="2"></circle>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
        <div className="percent">
            <span></span>
            <div>
                <svg preserveAspectRatio="none" viewBox="0 0 600 12">
                    <path d="M0,1 L200,1 C300,1 300,11 400,11 L600,11" stroke="currentColor" fill="none"></path>
                </svg>
            </div>
        </div>
    </div>

    <a href="" className="restart">
        <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.5,4.5c1.9-1.9,5.1-1.9,7,0c0.7,0.7,1.2,1.7,1.4,2.7l2-0.3C14.7,5.4,14,4.1,13,3.1c-2.7-2.7-7.1-2.7-9.9,0 L0.9,0.9L0.2,7.3l6.4-0.7L4.5,4.5z"></path>
            <path d="M15.8,8.7L9.4,9.4l2.1,2.1c-1.9,1.9-5.1,1.9-7,0c-0.7-0.7-1.2-1.7-1.4-2.7l-2,0.3 C1.3,10.6,2,11.9,3,12.9c1.4,1.4,3.1,2,4.9,2c1.8,0,3.6-0.7,4.9-2l2.2,2.2L15.8,8.7z"></path>
        </svg>
        Restart
    </a>    
    </div>
    )
}