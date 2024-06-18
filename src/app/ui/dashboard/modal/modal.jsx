import { useEffect } from "react";
import styles from "../modal/modal.module.css"

const Modal = ({
    isOpen,
    onClose,
    children, 
    title
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
            <div className={styles.overlay} >
                <div className={styles.overlayBackground} onClick={handleOverlayClick}>
                <div className={styles.overlayContainer}>
                        <div className={styles.overlayControls}>
                    <label className={styles.title} >{ title }</label>
                    <button className={styles.button} onClick={onClose}>X</button>
                    </div>
                    {children}
                </div>
                </div>
                </div>
        )
    
}

export default Modal