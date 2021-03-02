import React from "react";

function ModalAboutMe() {
    return (
        <div className="modal fade" id="about-me-modal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title important">Peter Ting</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Hi there! I’m Peter. My background includes a B.S. in Biology from UC Riverside, and most recently completing UC Berekeley Extension’s Full Stack Development course. I applied my analytical and logical skill set to rapidly progress my web development skills. I have multiple functioning individual and group full stack projects under my belt. Some of them are showcased on my Projects page! Feel free to take a look!

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalAboutMe;