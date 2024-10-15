"use client"

import { useEffect, useState } from "react";
import "./ToastModal.css"
function ToastModal() {

    const [text, setText] = useState("")
    const [show, setShow] = useState(false)
    const [showDuration, setShowDuration] = useState(0)
    let canConsumeNext = !show

    useEffect(() => {
        localStorage.setItem("tosts", JSON.stringify([]))

        let interval = setInterval(() => {
            if (!canConsumeNext){
                return
            }
            const tostQueue = JSON.parse(localStorage.getItem('tosts'));
            if (!tostQueue){
                return
            }
            if (!Array.isArray(tostQueue)){
                return
            }
            if (tostQueue.length == 0){
                return
            }
            setText(tostQueue[0].text)
            setShowDuration(tostQueue[0].duration)
            setShow(true)

            tostQueue.splice(0, 1)
            localStorage.setItem('tosts', JSON.stringify(tostQueue));

        }, 100);
        return () => clearInterval(interval)
    });

    useEffect(() => {
        if (!show)
            return

        setTimeout(() => {
            setShow(false)
        }, showDuration);
    }, [show]);

    return (
        <div className={`tost-modal ${show ? "show" : ""}`}>
            <p>
                {text}
            </p>
        </div>
     );
}

export default ToastModal;