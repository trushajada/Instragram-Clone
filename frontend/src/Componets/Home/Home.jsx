import React, { useEffect } from "react";
import homeimg from "../../assets/images/homeimg.jpg";
import post from "../../assets/images/post.jpg";
import { GrFavorite } from "react-icons/gr";
import { FiSmile } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()
    
    useEffect(()=>{
        const token =localStorage.getItem("jwt");
        if(!token){
            navigate("./SingUp")
        }
    })

    return (
        <>
            <div className="home px-3">
                {/* card */}
                <div className="container mx-auto">
                    <div className="card  border justify-center items-center py-7 max-w-lg mx-auto mt-5">
                        <div className="card-header flex w-36 items-center">
                            <img src={homeimg} alt="img" className="w-10 h-10 rounded-full mx-auto"/>
                            <h1 className="font-semibold">Trusha-jada</h1>
                        </div>
                        <br />
                        <div className="card-images">
                            <img src={post} alt="" className="mx-auto w-full max-h-[700px]"/>
                        </div>
                        <div className="card-content ">
                       <span><GrFavorite  className="w-10 text-2xl mt-5"/></span> 
                        <p className=" text-md mt-4 ms-2">1 like</p>
                        <p className=" text-md mt-1 ms-2">Amazing is place</p>
                        </div>
                        <div className="card-comment flex mt-3 border  space-x-2">
                            <span><FiSmile className="text-xl mt-2 w-10"/></span>
                            <input type="text" placeholder="Add a comment" className=" mx-auto flex w-full"/>
                            <button className="commit  p-1 mx-auto flex w-10 text-blue-400 font-semibold outline-none"><p className="text-center"> Post</p></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Home