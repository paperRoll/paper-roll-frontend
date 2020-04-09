import React, { useRef, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function useHover() {
    const ref = useRef();
    const [hovered, setHovered] = useState(false)

    const enter = () => setHovered(true)
    const leave = () => setHovered(false)

    useEffect(() => {
        const referrence = ref.current
        referrence.addEventListener('mouseenter', enter)
        referrence.addEventListener('mouseleave', leave)
        return () => {
            referrence.removeEventListener('mouseenter', enter)
            referrence.removeEventListener('mouseleave', leave)
        }
    }, [ref])   

    return [ref, hovered]      
}

function InfoTag() {

    const [ref, hovered] = useHover();

    return (
        <div>
            <span  style={{fontFamily: "Italics"}} className="badge badge-pill badge-info cursor-pointer" ref={ref}>i</span>
            {hovered && <div>Hi!</div>}
        </div>
        
    );
}
 export default InfoTag;