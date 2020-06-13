import React, { forwardRef, useImperativeHandle,useState } from "react";
import ReactDOM from "react-dom";
//import { PositionData } from "../../PositionData";

const Modal = forwardRef((props, ref) => {

    const [display, setDisplay] = React.useState(false);
    

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close()
        }
    })

    const open = () => {
        setDisplay(true)
        
    }
//
    const close = () => {
        setDisplay(false);
    }
    
  

   
    
    if (display) {
        
        return ReactDOM.createPortal(
            <div className="new-position-wrapper">
                <div onClick={close} className={"modal-backdrop"} />
                <div className={"modal-box"}>
                  <h1>asd</h1>
                </div>
            </div>, document.getElementById("root"))

    }
    return null;
});


export default Modal;