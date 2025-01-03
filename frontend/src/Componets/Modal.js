import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = () => {
    return (
        <>
            <div className="modal">
                <div className="modalheader">
                    <h5>onfirm</h5>
                </div>
                <button className="close-btn">
                    <RiCloseLine />
                </button>
                <div className="modalContent">
                    Are You Really want to logout?
                </div>
                <div className="modalActions">
                    <div className="container mx-auto">
                        <button className="logoutbtn bg-red-600 text-white">Log out</button>
                        <button className="canclebtn">Cancle</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal