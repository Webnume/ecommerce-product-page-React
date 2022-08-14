import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isShowing, toggle, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className="modal-overlay"
          />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">{children}</div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
