import { ReactDOM } from "react";
import Button from "./Button";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div class="modal" tabindex="-1" id={props.modalId}>
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{props.modalTitle}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    {props.children}
                </div>
            </div>
        </div>, document.getElementById("modal-wrapper"))
};

export default Modal