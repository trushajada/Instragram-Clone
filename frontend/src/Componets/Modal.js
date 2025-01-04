import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Modal = ({setIsModalOpen}) => {
    const navigate =useNavigate()
  
    return (
        <>
        <div className="dark " >
        <div className="createed fixed top-[50%] left-[45%]" onClick={(e)=>e.stopPropagation()}>
        <div className="modal w-[250px] bg-white text-black shadow-xl h-[200px] " >
                <div className="modalheader">
                    <h5 className="py-2 text-center text-xl font-semibold ">Confirm</h5>
                </div>  
                <button className="close-btn " onClick={()=>setIsModalOpen(false)}>
                    <RiCloseLine className=" absolute -right-2 -top-1 w-8 h-8 bg-blue-800 text-white rounded" />
                </button>
                <div className="modalContent text-center">
                    Are You Really want to logout?
                </div>
                <div className="modalActions">
                    <div className="container mx-auto py-10 text-center ">
                        <button className="logoutbtn me-5 bg-rose-500 px-5 p-2 rounded-lg text-white text-center" onClick={()=>{
                            setIsModalOpen(false)
                            localStorage.clear()
                            navigate('./SingIn')
                        }}>Log out</button>
                        <button className="canclebtn bg-blue-950 px-5 p-2 text-white text-center rounded-lg" onClick={console.log("clcik")
                        } >Cancle</button>
                    </div>
                </div>
            </div>
        </div>
      
        </div>
        
      
        </>
    )
}

export default Modal  





// import React from "react";
// import { RiCloseLine } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";

// const Modal = ({  }) => { 
//     const navigate = useNavigate();

//     if (!isOpen) { // Conditionally render: If isOpen is false, return null
//         return null;
//     }

//     const handleLogout = () => {
//       localStorage.clear()
//       navigate('/SingIn')
//       onClose()
      
//     }
//     return (
//         <div className="dark fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={onClose}> 
//             <div className="createed relative bg-white text-black shadow-xl rounded-lg p-6 w-[300px]" onClick={(e)=>e.stopPropagation()}> 
//                 <div className="modalheader">
//                     <h5 className="text-center text-xl font-semibold mb-4">Confirm</h5>
//                     <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
//                         <RiCloseLine className="w-6 h-6" />
//                     </button>
//                 </div>
//                 <div className="modalContent text-center mb-4">
//                     Are you sure you want to logout?
//                 </div>
//                 <div className="modalActions flex justify-center space-x-4">
//                     <button className="logoutbtn bg-rose-500 hover:bg-rose-600 px-5 py-2 rounded-lg text-white" onClick={handleLogout}>Log out</button>
//                     <button className="canclebtn bg-blue-950 hover:bg-blue-800 px-5 py-2 text-white rounded-lg" onClick={onClose}>Cancel</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;