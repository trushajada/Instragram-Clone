import React from "react";
import homeimg from "../../assets/images/homeimg.jpg";

const Createpost = () => {
    return (
        <>
            <div className="createpost px-3">
                <div className="container mx-auto">
                    <div className="post border justify-center items-center py-4  max-w-lg mx-auto mt-5">
                        <div className="post-header flex border-b-2 ">
                            <h3 className="text-center font-semibold text-xl mx-auto mb-3">Create New Post</h3>
                            <button className="bg-gray-100 w-12 text-blue-400 font-semibold mb-3 me-1">Share</button>
                        </div>
                        <div className="main-div p-3 border-b-2">
                            <input type="file" accept="image/*" />
                        </div>
                        <div className="detail flex items-center">
                            <div className="card-header p-3">
                                <img src={homeimg} alt="" className="w-10 h-10 rounded-full"/>
                            </div>
                            <h5>Trusha-Jada</h5>
                        </div>
                        <div className="p-3">
                        <textarea name="" id="" placeholder="Write Caption" className="border w-full h-[100px]"></textarea>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Createpost