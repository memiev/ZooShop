import React from "react";
import ReactDOM from "react-dom";

import styles from "./modal.module.css";

const Modal = ({ isOpen, onClose, title, children }) => {
    return ReactDOM.createPortal(
        // <div style={{display: isOpen ? "" : "hidden"}}>
        <div className={isOpen ? "" : "hidden"}>
            <div className={styles.overlay} />
            <div className={styles.modalContentWraper}>
                <button onClick={onClose}>Close</button>
                <span>{title}</span>
                {children}
            </div>
        </div>,
        document.getElementById("portal")
    );
};

export default Modal;
