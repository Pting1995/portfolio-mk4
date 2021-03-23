import React from "react";

function ModalAboutMe() {
    return (
        <div className="modal fade" id="about-me-modal" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title important">Peter Ting</h3>
                        <button type="button" className="btn-close btn-outline-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Hi there! I’m Peter! I recently earned a
                        Certificate in UC Berkeley's Full Stack Web
                        Development program, I am currently
                        seeking full-time opportunities in web
                        development to create efficient and
                        seamless applications with IOT devices
                        and cloud computing. I have built multiple
                        full stack projects in my portfolio, and the
                        source code can be found in my GitHub.

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalAboutMe;