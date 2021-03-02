import React from "react";

function ModalContactMe() {
    return (
        <div className="modal fade" id="contact-me-modal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title important">Peter Ting</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul>
                            <a href="mailto:pting1995@gmail.com">
                                <i className="fa fa-envelope contact-icon"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/pting002/" target="_blank" rel="noreferrer">
                                <i className="fa fa-linkedin contact-icon"></i>
                            </a>

                            <a href="https://github.com/Pting1995" target="_blank" rel="noreferrer">
                                <i className="fa fa-github contact-icon"></i>
                            </a>
                            <a href="./assets/Resume.pdf" target="_blank" rel="noreferrer">
                                <i className="fa fa-file contact-icon"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalContactMe;