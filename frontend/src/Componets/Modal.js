import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = () => {
    return (
        <>
        <div className="centered top-[40%] fixed left-[45%]	">
        <div className="modal w-[250px] bg-white text-black shadow-xl h-[200px] relative ">
                <div className="modalheader">
                    <h5 className="py-2 text-center text-xl font-semibold ">Confirm</h5>
                </div>  
                <button className="close-btn ">
                    <RiCloseLine className=" absolute -right-2 -top-1 w-8 h-8 bg-blue-800 text-white rounded"/>
                </button>
                <div className="modalContent text-center">
                    Are You Really want to logout?
                </div>
                <div className="modalActions">
                    <div className="container mx-auto py-10 text-center ">
                        <button className="logoutbtn me-5 bg-rose-500 px-5 p-2 rounded-lg text-white text-center">Log out</button>
                        <button className="canclebtn bg-blue-950 px-5 p-2 text-white text-center rounded-lg">Cancle</button>
                    </div>
                </div>
            </div>
        </div>
           
        </>
    )
}

export default Modal