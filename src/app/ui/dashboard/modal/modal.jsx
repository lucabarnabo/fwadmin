"use client"
import { useEffect } from "react";
import styles from "../modal/modal.module.css"

const Modal = ({
    isOpen,
    onClose,
    children
}) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose()
            }
        }
        window.addEventListener("keydown", handleKeyDown)
    }, [onClose])
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
        onClose();
        
    }
  };
    if (!isOpen) { return null }
    
        return (
            <div className={styles.overlay} onClick={handleOverlayClick}>
                <div className={styles.container}>
                    <div className={styles.buttonLocation}>
                    <button className={styles.button} onClick={onClose}>X</button>
                    </div>
                   
                    {children}
                </div>
            </div>
        )
    
}

export default Modal