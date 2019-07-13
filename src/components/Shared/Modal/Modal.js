import React from 'react';

const Modal = props => {
    return (
        <div className="modalBg">
                <div className="modalContainer">
                    <button id="closeBtn" className="close" onClick={props.closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modalContent">
                        <div className="modalHeader">
                            <h3>{props.title}</h3>
                        </div>
                        <hr />
                        {props.children}
                    </div>
                </div>
            </div>
    );
}

export default Modal;